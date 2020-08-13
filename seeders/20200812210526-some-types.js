"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("types", [
      {
        typeOfOrder: "walking and keeping",
        price: 2,
        image: "https://ibb.co/6PrzFsF",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        typeOfOrder: "washing",
        price: 10,
        image: "https://ibb.co/bb0LfBw",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        typeOfOrder: "combing",
        price: 20,
        image: "https://ibb.co/H4cFrxf",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("types", null, {});
  },
};
