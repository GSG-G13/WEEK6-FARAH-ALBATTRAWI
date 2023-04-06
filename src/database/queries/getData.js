const connection = require('../config/connection');

const getAppointmentDataFromDB = () => connection.query('SELECT id, name, age, date, time, mobile FROM appointments');

module.exports = getAppointmentDataFromDB;
