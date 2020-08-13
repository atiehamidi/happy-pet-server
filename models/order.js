"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      order.belongsTo(models.pet);
      order.belongsToMany(models.type, {
        through: "typeOrders",
        foreignKey: "orderId",
      });
    }
  }
  order.init(
    {
      start: { type: DataTypes.DATE, allowNull: false },
      end: { type: DataTypes.DATE, allowNull: false },
      latitude: { type: DataTypes.DECIMAL, allowNull: false },
      longitude: { type: DataTypes.DECIMAL, allowNull: false },
      descriptionOfOrder: DataTypes.TEXT,
      total: { type: DataTypes.INTEGER, allowNull: false },
      done: { type: DataTypes.BOOLEAN, defaultValue: false },
      rate: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "order",
    }
  );
  return order;
};
