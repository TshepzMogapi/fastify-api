const getAllTasks = {
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        required: ['id', 'name', 'description'],
        properties: {
          id: {type: 'string', format: 'uuid'},
          name: {type: 'string'},
          description: {type: 'string'},
        },
      },
    },
  },
};

const createTask = {
  body: {
    type: 'object',
    required: ['name', 'description'],
    properties: {
      name: {type: 'string'},
      description: {type: 'string'},
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
      id: {type: 'string'},
    },
  },
};
module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};
