const connection = require('../config/connection');

const postPatients = () => {
  const sql = {
    text:'SELECT * FROM patients',
    values: []
  };

  return connection.query(sql)
};

module.exports = postPatients;