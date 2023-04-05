require('env2')('.env');
const {Pool} = require('pg');

let DB_URL = '';
if(process.env.NODE_ENV === 'production'){
  DB_URL= process.env.DATABASE_URL
}


const connection = new Pool({
  connectionString: DB_URL,
  ssl: false
});

module.exports = connection;