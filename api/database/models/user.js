"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init(
    {
      fullName: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      imgUrl: { type: DataTypes.STRING },
      country: { type: DataTypes.STRING , allowNull: false },
      phone: { type: DataTypes.STRING },
      description: { type: DataTypes.STRING, allowNull: true },
      isSeller: { type: DataTypes.BOOLEAN,  defaultValue: false},
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};