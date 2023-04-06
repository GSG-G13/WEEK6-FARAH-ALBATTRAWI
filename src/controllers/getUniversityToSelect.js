const getUniNameFromDB = require('../database/queries/getUniName');

const getUniversity = (req, res) => {
  getUniNameFromDB()
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

module.exports = getUniversity;