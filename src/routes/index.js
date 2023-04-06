const express = require('express');
const {
  addAppointment,
  getAppointment,
} = require('../controllers');

const router = express.Router();

router.post('/add-appointment', addAppointment);

router.get('/appointment', getAppointment);

module.exports = router;

