const addAppointment = require('./addAppointment');
const { pageNotFoundError, serverError } = require('./error');
const getAppointment = require('./getAppiontment');


module.exports = {
  addAppointment,
  getAppointment,
  pageNotFoundError,
  serverError,
};
