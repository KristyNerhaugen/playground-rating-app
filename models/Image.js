// this model code is based off of the guide found here https://www.bezkoder.com/node-js-upload-image-mysql/
const { BLOB } = require("sequelize");
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Image extends Model {}

Image.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    imageData: {
      type: BLOB("long"),
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "image",
  }
);

module.exports = Image;
