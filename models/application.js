
var mongoose = require('mongoose');

var applicationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },

    businessName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    gstNumber: {
        type: Number,
        required: true
    },
    businessType: {
        type: String,
        required: true
    },

    amount: {
        type: Number,
        required: true
    },
    interest: {
        type: Number,
        required: true
    },
    tenure: {
        type: Number,
        required: true
    },
})


module.exports = mongoose.model("applications", applicationSchema, "applications");