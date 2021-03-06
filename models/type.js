"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      type.belongsToMany(models.order, {
        through: "typeOrders",
        foreignKey: "typeId",
      });
    }
  }
  type.init(
    {
      typeOfOrder: { type: DataTypes.STRING, allowNull: false },
      price: { type: DataTypes.INTEGER, allowNull: false },
      image: { type: DataTypes.TEXT, allowNull: false },
    },
    {
      sequelize,
      modelName: "type",
    }
  );
  return type;
};
