async function routes(fastify, options) {
  // Testing route
  fastify.get('/', async (request, reply) => {
    return { hello: 'world Prod' };
  });
}

module.exports = routes;