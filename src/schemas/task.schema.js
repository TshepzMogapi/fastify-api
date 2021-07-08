const getAllTasks = {
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        required: ['id', 'name', 'createdAt', 'important', 'dueDate', 'done'],
        properties: {
          id: { type: 'string', format: 'uuid' },
          name: { type: 'string' },
          createdAt: { type: 'string', format: 'date-time' },
          important: { type: 'boolean' },
          dueDate: { type: 'string', format: 'date-time' },
          done: { type: 'boolean' },
        },
      },
    },
  },
};

const createTask = {
  body: {
    type: 'object',
    required: ['name'],
    properties: {
      name: { type: 'string' },
    },
  },
  response: {
    201: {
      type: 'object',
      properties: {
        created: { type: 'boolean' },
      },
    },
  },
};

const updateTask = {
  body: {
    type: 'object',
    properties: {
      dueDate: { type: 'string', format: 'date-time' },
      important: { type: 'boolean' },
      done: { type: 'boolean' },
    },
  },
  params: {
    type: 'object',
    properties: {
      id: { type: 'string', format: 'uuid' },
    },
  },
};

const deleteTask = {
  params: {
    type: 'object',
    properties: {
      id: { type: 'string', format: 'uuid' },
    },
  },
};
module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};
