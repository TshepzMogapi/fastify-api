require('dotenv').config();

const {DB_HOST, DB_USERNAME, DB_PASSWORD, DATABASE} = process.env;
module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DATABASE,
    host: DB_HOST,
    dialect: 'postgres',
  },
};
