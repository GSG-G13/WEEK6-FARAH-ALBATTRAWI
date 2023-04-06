const connection = require('../config/connection');

const getAppointmentDataFromDB = () => connection.query(`SELECT patients.name, appointments.date
FROM patients
INNER JOIN appointments
ON patients.id = appointments.patient_id`);

module.exports = getAppointmentDataFromDB;




/* SELECT patients.name, appointments.date
FROM patients
INNER JOIN appointments
ON patients.id = appointments.patient_id; */