const express = require('express');
const {addAppointment} = require('../controllers');

const router = express.Router();

router.post('/add-appointment', addAppointment);

module.exports = router;

