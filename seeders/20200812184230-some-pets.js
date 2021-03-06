"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "pets",
      [
        {
          type: "dog",
          name: "maloos",
          birthday: "2019-12-05",
          sex: "male",
          imageOfPet: "https://i.ibb.co/KLq3r7r/n02097474-3355.png",
          breed: "test",
          descriptionOfPet: "lorem impos jbgv hvbb",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          type: "cat",
          name: "persian",
          birthday: "2019-07-05",
          sex: "female",
          imageOfPet: "https://i.ibb.co/0yQHYBS/persian-cat-face.png",
          breed: "persian",
          descriptionOfPet: "lorem impos jbgv hvbb",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("pets", null, {});
  },
};
