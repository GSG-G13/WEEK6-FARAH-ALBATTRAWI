const connection = require('../config/connection');
const {readFileSync} = require('fs');
const {join} = require('path') 


const databaseBuild = () => {
  const sql = readFileSync(join(__dirname, "build.sql")).toString();
  return connection.query(sql);
};

module.exports =  databaseBuild ;