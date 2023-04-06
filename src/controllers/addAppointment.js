const addAppointmentToDb = require('../database/queries/postData');

const addAppointment = (req, res) => {
  const {
    name, age, mobile, date, university,
  } = req.body;
  addAppointmentToDb(name, age, mobile, date, university)
    .then((date)=> addAppointment())
    .catch(() => {
      res.json({ message: 'There is an Error' });
    });
};
module.exports = addAppointment;
