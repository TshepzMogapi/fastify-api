// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });
const taskRoutes = require('./routes/tasks.routes');
const dbconnector = require('./db/db');

fastify.register(dbconnector);
fastify.register(taskRoutes);
// Run the server!
const start = async () => {
  try {
    await fastify.listen(3009);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
