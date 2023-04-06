const connection = require('../config/connection');
// get appointment
const getData = () => {
  const sql = {
    text:'SELECT * FROM patients',
    values: []
  };

  return connection.query(sql)
};

module.exports = getData;