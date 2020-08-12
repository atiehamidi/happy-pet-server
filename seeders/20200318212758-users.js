"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Atieh",
          lastName: "Owner",
          phone: 123456,
          email: "atieh@test.com",
          password: bcrypt.hashSync("123", SALT_ROUNDS),
          admin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "dummy",
          lastName: "Owner",
          phone: 123456,
          email: "dummy@test.com",
          password: bcrypt.hashSync("123", SALT_ROUNDS),
          admin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
