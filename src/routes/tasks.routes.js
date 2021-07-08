const { v4: uuidv4 } = require('uuid');
const { getAllTasks, createTask } = require('../schemas/task.schema');

async function routes(fastify, options) {
  const { client } = fastify.db;
  fastify.get('/', { schema: getAllTasks }, async (request, reply) => {
    try {
      const { rows } = await client.query('SELECT * FROM tasks');
      console.log(rows);
      reply.send(rows);
    } catch (err) {
      throw new Error(err);
    }
  });

  fastify.post('/', { schema: createTask }, async (request, reply) => {
    const { name } = request.body;
    const id = uuidv4();
    const query = {
      text: `INSERT INTO tasks (id, name)
      VALUES($1, $2 ) RETURNING *`,
      values: [id, name],
    };
    console.log('\n\n\n');
    console.log(query);
    console.log('\n\n\n');

    try {
      const { rows } = await client.query(query);
      // console.log(rows[0]);
      reply.code(201);
      return { created: true };
    } catch (err) {
      throw new Error(err);
    }
  });
}
module.exports = routes;
