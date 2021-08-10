const fastifyPlugin = require('fastify-plugin');
const {Client} = require('pg');
require('dotenv').config();

const client = new Client({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_SERVICE,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB,
});
async function dbconnector(fastify, options) {
  try {
    console.log(client.database);
    await client.connect();
    console.log('db connected succesfully');
    fastify.decorate('db', {client});
  } catch (err) {
    console.error(err);
  }
}
module.exports = fastifyPlugin(dbconnector);
