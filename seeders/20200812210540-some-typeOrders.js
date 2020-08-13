"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "typeOrders",
      [
        {
          price: 2,
          orderId: 1,
          typeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          price: 2,
          orderId: 2,
          typeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          price: 10,
          orderId: 2,
          typeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          price: 20,
          orderId: 2,
          typeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("typeOrders", null, {});
  },
};
