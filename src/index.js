// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });
const taskRoutes = require('./routes/tasks.routes');
const dbconnector = require('./db/db');

fastify.register(dbconnector);
fastify.register(taskRoutes);
fastify.register(require('./routes'));

// Declare a route
// fastify.get('/', async (request, reply) => {
//   return { hello: 'world' }
// })
// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
