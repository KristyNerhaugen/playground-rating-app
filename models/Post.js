const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Post extends Model {}


Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    park_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }      
    },
    review: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }      
    },
    // including image column in post table.  I set allowNull to true.  We can change it to false if that seems necessary. 
    image: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
  }
);

module.exports = Post;