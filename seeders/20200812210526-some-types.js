"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("types", [
      {
        typeOfOrder: "walking and keeping",
        price: 2,
        image: "https://i.ibb.co/Fwm2z7z/Dog-concept-icons-set-with-walking-and-washing-symbols-cartoon-isolated-vector-illustration.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        typeOfOrder: "washing",
        price: 10,
        image: "https://i.ibb.co/nPGfWcd/Dog-concept-icons-set-with-walking-and-washing-symbols-cartoon-isolated-vector-illustration.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        typeOfOrder: "combing",
        price: 20,
        image: "https://i.ibb.co/9gx8qVk/Dog-concept-icons-set-with-walking-and-washing-symbols-cartoon-isolated-vector-illustration.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("types", null, {});
  },
};
