const connection = require('../config/connection');

const makeAppointment= (pname,age,phone,uni_name,date) => {
  const sql = {
    text:`SELECT patients.name,patients.age,patients.phone,universities.name,appointments.date
    FROM patients
   INNER JOIN appointments
   ON patients.id = appointments.patient_id
   INNER JOIN universities
  ON universities.id= appointments.uni_id;`,
    values: []
  };

  return connection.query(sql)
};

module.exports = getPatients;
