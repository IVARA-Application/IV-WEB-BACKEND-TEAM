const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authenticate = require('../authenticate');
const cors = require('./cors');

const Contact = require('../models/contactUs');

const contactUsRouter = express.Router();

contactUsRouter.use(bodyParser.json());

contactUsRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200) })
.post(cors.corsWithOptions,  (req, res, next) => {
    Contact.create(req.body)
    .then((c) => {
        console.log('Contact Us Stored', c);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(c);
    }, (err) => next(err))
    .catch((err) => next(err));
})



module.exports = contactUsRouter;