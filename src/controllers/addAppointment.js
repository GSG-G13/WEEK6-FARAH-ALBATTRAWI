const addAppointmentToDb = require('../database/queries/addAppointment');

const addAppointment = (req, res) => {
  const {
    name, age, mobile, date, time, doctors,
  } = req.body;
  addAppointmentToDb(name, age, mobile, date, time, doctors)
    .then(console.log)
    .catch(() => {
      res.json({ message: 'There is an Error' });
    });
};
module.exports = addAppointment;
