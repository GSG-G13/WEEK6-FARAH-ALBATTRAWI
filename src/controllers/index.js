const addAppointment = require('./addAppointment');
const { pageNotFoundError, serverError } = require('./error');
const getAppointment = require('./getAppiontment');
const getUniName = require('./getUniversityToSelect');

module.exports = {
  addAppointment,
  getAppointment,
  getUniName,
  pageNotFoundError,
  serverError,
};
