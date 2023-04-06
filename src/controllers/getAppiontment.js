const getAppointmentFromDB = require('../database/queries/getData');

const getAppointment = (req, res) => {
  getAppointmentFromDB()
    .then((data) => {
      res.json({
        statusCode: 200,
        names: data.rows,
      });
    })
    .catch(() => {
      res.json({ message: 'There is an Error' });
    });
};

module.exports = getAppointment;