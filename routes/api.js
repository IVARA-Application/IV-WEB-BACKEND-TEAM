const express = require('express');
const authController = require('../controllers/auth');
const cors = require("./cors");

const router = express.Router();
router.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200) })
router.post('google',cors.corsWithOptions, authController.login);

module.exports = router;