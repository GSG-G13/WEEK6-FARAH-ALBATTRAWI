const getAppointmentFromDB = require('../database/queries/getData');

const getAppointmentData = (req, res) => {
  getAppointmentFromDB()
    .then((data) => {
      res.json({
        statusCode: 200,
        names: data.rows,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'There is an Error' });
    });
};

module.exports = getAppointmentData;
