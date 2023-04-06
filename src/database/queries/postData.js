const connection = require('../config/connection');

const makeAppointment = (name, age, phone) => {
  let id;
  const patientResult = {
    text: 'INSERT INTO patients (name, age, phone) VALUES ($1, $2, $3) RETURNING *',
    values: [name, age, phone]
  };
  
  return connection.query(patientResult);
    // .then(patientRes => {
    //   id = patientRes.rows[0].id;
    //   // appointmentResult.values.push(patient_id);
    //   return connection.query(appointmentResult);
    // })
};

module.exports = makeAppointment;