const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Card = mongoose.model('Card');

router.get('/', (req, res) => {
    res.render("card/addOrEdit", {
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
    var card = new Card();
    card.fullName = req.body.fullName;
    card.department = req.body.department;
    card.eventName = req.body.eventName;
    card.status = req.body.status;
    card.save((err, doc) => {
        if (!err)
            res.redirect('card/list');
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("card/addOrEdit", {
                    viewTitle: "Insert Participant Details",
                    card: req.body
                });
            }
            else
                console.log('Error during record insertion : ' + err);
        }
    });
}


function updateRecord(req, res) {
    Card.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('card/list'); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("card/addOrEdit", {
                    viewTitle: 'Update Participant Data',
                    card: req.body
                });
            }
            else
                console.log('Error during record update : ' + err);
        }
    });
}




router.get('/list', (req, res) => {
    Card.find((err, docs) => {
        if (!err) {
            res.render("card/list", {
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
    Card.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("card/addOrEdit", {
                viewTitle: "Update Participant",
                card: doc
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    Card.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/card/list');
        }
        else { console.log('Error in Event delete :' + err); }
    });
});

module.exports = router;