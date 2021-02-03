const express = require('express');
const router = express.Router();
const Contact = require('../models/contactUs');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/contact-us', async (req, res) => {
  // res.send(req.body);
  const contact = new Contact({ ...req.body });
  contact.save();
  console.log(contact);
  res.redirect('/');
})

module.exports = router;
