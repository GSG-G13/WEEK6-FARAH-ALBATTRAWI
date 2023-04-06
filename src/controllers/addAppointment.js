const appointmentQuery = require('../database/queries/appointmentQuery');
const makeAppointment = require('../database/queries/postData');

const addAppointment = (req, res) => {
  const {
    name, age, mobile, date, university,
  } = req.body;
  makeAppointment(name, age, mobile, date, university)
    .then((patientData)=> {
      let {id} = patientData.rows[0];
      appointmentQuery({date, id}).then(appointmentData => {
        res.status(201).json({
          patient: patientData.rows[0],
          patientAppointment: appointmentData.rows[0]
        })
      }).catch(err => {
        res.status(500).json({
          message: 'Server Error'
        })
      })
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'There is an Error' });
    });
};
module.exports = addAppointment;
