const {v4: uuidv4} = require('uuid');
const {
  getAllTasks,
  createTask,
  updateTask,
} = require('../schemas/task.schema');

const models = require('../../models/index')

async function routes(fastify) {
  const {client} = fastify.db;
  fastify.get('/', {schema: getAllTasks}, async (request, reply) => {
    try {
      const tasks = await models.Task.findAll({})
      reply.send(tasks);
    } catch (err) {
      throw new Error(err);
    }
  });

  fastify.post('/', {schema: createTask}, async (request, reply) => {
    const {name} = request.body;
    const id = uuidv4();
    const query = {
      text: `INSERT INTO tasks (id, name)
      VALUES($1, $2 ) RETURNING *`,
      values: [id, name],
    };
    console.log('\n\n\n');

    try {
      const {rows} = await client.query(query);
      console.log(rows[0]);
      reply.code(201);
      return {created: true};
    } catch (err) {
      throw new Error(err);
    }
  });

  fastify.patch('/:id', {schema: updateTask}, async (request, reply) => {
    const {id} = request.params;
    const {name} = request.body;
    const query = {
      text: `UPDATE tasks SET 
                            name = COALESCE($1, name), 
                            WHERE id = $2 RETURNING *`,
      values: [name, id],
    };
    try {
      const {rows} = await client.query(query);
      console.log(rows[0]);
      reply.code(204);
    } catch (err) {
      throw new Error(err);
    }
  });
}
module.exports = routes;
