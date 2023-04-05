const addAppointment = require('./addAppointment');

const { notFoundError, serverError } = require('./error');

module.exports = {
  addAppointment,
  notFoundError,
  serverError,
};
