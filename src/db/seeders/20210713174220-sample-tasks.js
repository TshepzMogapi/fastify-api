'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Tasks', 
     [{
      name: 'Create more tasks',
      description: 'Update endpoint for creating tasks',
      createdAt: new Date(),
      updatedAt: new Date(),
      }], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tasks', null, {})
  }
};
