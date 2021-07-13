const getAllTasks = {
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        required: ['id', 'name'],
        properties: {
          id: {type: 'string', format: 'uuid'},
          name: {type: 'string'},
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
      name: {type: 'string'},
    },
  },
  response: {
    201: {
      type: 'object',
      properties: {
        created: {type: 'boolean'},
      },
    },
  },
};

const updateTask = {
  body: {
    type: 'object',
    properties: {
      name: {type: 'string'},
    },
  },
  params: {
    type: 'object',
    properties: {
      id: {type: 'string'},
    },
  },
};

const deleteTask = {
  params: {
    type: 'object',
    properties: {
      id: {type: 'string', format: 'uuid'},
    },
  },
};
module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};
