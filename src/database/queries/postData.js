const connection = require('../config/connection');

const addAppointment= (pname,age,phone,uni_name,date) => {
  const sql = {
    text:`SELECT patients.name,patients.age,patients.phone,universities.name,appointments.date
    FROM patients
   INNER JOIN appointments
   ON patients.id = appointments.patient_id
   INNER JOIN universities
  ON universities.id= appointments.uni_id;`,
    values: [pname,age,phone,uni_name,date]
  };

  return connection.query(sql)
};

module.exports = addAppointment;
