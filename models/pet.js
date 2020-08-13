"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pet extends Model {
    static associate(models) {
      pet.hasMany(models.order);
      pet.belongsTo(models.user);
    }
  }
  pet.init(
    {
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      birthday: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      sex: {
        type: DataTypes.ENUM,
        values: ["male", "female", "others"],
        allowNull: false,
      },
      imageOfPet: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      breed: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descriptionOfPet: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "pet",
    }
  );
  return pet;
};
