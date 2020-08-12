"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "orders",
      [
        {
          start: "2020-09-06 13:00:00",
          end: "2020-09-12 13:00:00",
          latitude: 52.35033,
          longitude: 4.92288,
          descriptionOfOrder: "lorem impos jbgv hvbb",
          done: false,
          total: 120,
          rate: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          petId: 2,
        },
        {
          start: "2020-09-07 13:00:00",
          end: "2020-09-09 13:00:00",
          latitude: 52.35033,
          longitude: 4.92288,
          descriptionOfOrder: "order number 2",
          done: false,
          total: 100,
          rate: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          petId: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("orders", null, {});
  },
};
