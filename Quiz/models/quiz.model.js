const mongoose = require('mongoose');

var quizSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: 'This field is required.'
    },
    department: {
        type: String,
        required: 'This field is required.'
    },
    eventName: {
        type: String,
        required: 'This field is required.'
    },
    status: {
        type: String,
        required: 'This field is required.'
    }
});

mongoose.model('Quiz', quizSchema);
