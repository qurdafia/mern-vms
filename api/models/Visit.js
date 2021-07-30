const mongoose = require('mongoose');

const VisitSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    face: {
        type: String,
        required: true
    },
    temperature: {
        type: String,
        required: true
    },
    contactPerson: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Visits', VisitSchema);