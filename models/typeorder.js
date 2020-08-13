"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class typeOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      typeOrder.belongsTo(models.order);
      typeOrder.belongsTo(models.type);
    }
  }
  typeOrder.init(
    {
      price: DataTypes.INTEGER,
      orderId: DataTypes.INTEGER,
      typeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "typeOrder",
    }
  );
  return typeOrder;
};
