const path = require('path');

const notFoundError = (req, res) => {
  res
    .status(404)
    .sendFile(
      path.join(__dirname, '..', '..', 'public', 'html', '404ErrorPage.html'),
      (err) => {
        if (err) {
          res.sendFile(
            path.join(__dirname, '..', '..', 'public', 'html', '500ErrorPage.html'),
          );
        }
      },
    );
};

const serverError = (error, req, res, next) => {
  res
    .status(500)
    .sendFile(path.join(__dirname, '..', '..', 'public', 'html', '500ErrorPage.html'));
};
module.exports = {
  notFoundError,
  serverError,
};
