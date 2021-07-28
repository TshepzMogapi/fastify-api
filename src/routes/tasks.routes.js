const {v4: uuidv4} = require('uuid');
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} = require('../schemas/task.schema');

// const models = require('../../models/index');
const models = require('../db/models/index');

const taskService = require('../services/task.service');

async function routes(fastify) {
  fastify.get('/tasks/', {schema: getAllTasks}, async (request, reply) => {
    try {
      const tasks = await taskService.getAllTasks();
      reply.send(tasks);
    } catch (err) {
      throw new Error(err);
    }
  });

  fastify.post('/tasks/', {schema: createTask}, async (request, reply) => {
    const {name, description} = request.body;
    try {
      const task = taskService.createTask({
        name: name,
        description: description
      })
      reply.send(task);
    } catch (err) {
      throw new Error(err);
    }
  });

  fastify.patch('/tasks/:id', {schema: updateTask}, async (request, reply) => {
    const {id} = request.params;
    const {name,description} = request.body;

    try {
      const task = await models.Task.findOne(
        {where: {
          id: id
        }}
      )

      if (task) {
        task.update({description:description, name:name})
        reply.send(task)
      } 

    } catch (err) {
      throw new Error(err);
    }
  });

  fastify.delete('/tasks/:id', {schema: deleteTask}, async function(request, reply) {
    console.log(request.params)
    try {
        await models.Task.destroy({
          where:{
            id: request.params.id
          }
        });
        reply.send("deleted")
    } catch(err) {
            throw new Error(err)
    }
})
}
module.exports = routes;
