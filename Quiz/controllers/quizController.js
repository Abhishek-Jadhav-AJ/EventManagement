const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Quiz = mongoose.model('Quiz');

router.get('/', (req, res) => {
    res.render("quiz/addOrEdit", {
        viewTitle: "Insert Participant Details"
    });
});


router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
        else
        updateRecord(req, res);
});


function insertRecord(req, res) {
    var quiz = new Quiz();
    quiz.fullName = req.body.fullName;
    quiz.department = req.body.department;
    quiz.eventName = req.body.eventName;
    quiz.status = req.body.status;
    quiz.save((err, doc) => {
        if (!err)
            res.redirect('quiz/list');
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("quiz/addOrEdit", {
                    viewTitle: "Insert Participants Details",
                    quiz: req.body
                });
            }
            else
                console.log('Error during record insertion : ' + err);
        }
    });
}


function updateRecord(req, res) {
    Quiz.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('quiz/list'); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("quiz/addOrEdit", {
                    viewTitle: 'Update Participant Data',
                    quiz: req.body
                });
            }
            else
                console.log('Error during record update : ' + err);
        }
    });
}




router.get('/list', (req, res) => {
    Quiz.find((err, docs) => {
        if (!err) {
            res.render("quiz/list", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving event list :' + err);
        }
    });
});



function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'fullName':
                body['fullNameError'] = err.errors[field].message;
                break;
            case 'department':
                body['departmentError'] = err.errors[field].message;
                break;
            case 'eventName':
                body['eventNameError'] = err.errors[field].message;
                break;
                case 'status':
                    body['statusError'] = err.errors[field].message;
                    break;
            default:
                break;
        }
    }
}

router.get('/:id', (req, res) => {
    Quiz.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("quiz/addOrEdit", {
                viewTitle: "Update Participants",
                Quiz: doc
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    Quiz.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/quiz/list');
        }
        else { console.log('Error in Participants delete :' + err); }
    });
});

module.exports = router;