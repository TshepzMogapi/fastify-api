const models = require('../../models/index');


const getAllTasks = async(dto) => {
  try {
    const tasks = await models.Task.findAll({});
    return tasks;
  } catch (error) {
    console.log(error);
  }
}

const createTask = async(dto) => {
  try {
    return await models.Task.create({
      name: name,
      description: description
    });
  } catch (error) {
    
  }
}

module.exports = {getAllTasks,createTask}