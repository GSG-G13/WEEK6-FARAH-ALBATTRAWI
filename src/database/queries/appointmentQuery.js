const connection = require("../config/connection");

const appointmentQuery = ({ date, id }) => {
  const appointmentResult = {
    text: 'INSERT INTO appointments (date, patient_id) VALUES ($1, $2) RETURNING *;',
    values: [date,id ]
  };

  return connection.query(appointmentResult)
};


module.exports = appointmentQuery;