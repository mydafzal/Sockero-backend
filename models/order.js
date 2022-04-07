"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Manufacturer, {
        foreignKey: "manufacturer_id",
        as: "manufacturer",
        onDelete: "CASCADE",
        hooks: true,
      });
      Order.belongsTo(models.Buyer, {
        foreignKey: "buyer_id",
        as: "buyer",
      });
      Order.hasOne(models.Product, {
        foreignKey: "product_id",
        as: "product",
        onDelete: "CASCADE",
        hooks: true,
      });
    }
  }
  Order.init(
    {
      buyer_id: DataTypes.INTEGER,
      manufacturer_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      ask_price: DataTypes.INTEGER,
      details: DataTypes.STRING,
      duration: DataTypes.DATE,
      offer_price: DataTypes.INTEGER,
      status: DataTypes.ENUM,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};