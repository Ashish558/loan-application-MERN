
var express = require('express')
var mongoose = require('mongoose')

var Application = require('../models/application')
const { validateApplication } = require("../utils/validation")

var router = express.Router()

router.post('/loan', async function (req, res) {

    const {
        firstName, lastName, email, phoneNumber, age,
        businessName, address, gstNumber, businessType,
        amount, interest, tenure } = req.body
       
    //validate 
    const { error } = validateApplication(req.body)
    if (error) return res.status(202).json(error.details[0].message)

    var newApplication = new Application({
        firstName, lastName, email, phoneNumber, age,
        businessName, address, gstNumber, businessType,
        amount, interest, tenure
    })

    //save Application
    await newApplication.save()
        .then(() => res.status(200).json('Application created'))
        .catch(err => res.status(401).json("An error occured try again"))
})


module.exports = router
