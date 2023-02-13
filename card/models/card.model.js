const mongoose = require('mongoose');

var cardSchema = new mongoose.Schema({

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

mongoose.model('Card', cardSchema);
