const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Module extends Model {}

Module.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    progress: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    languageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'module',
  }
);

module.exports = Module;
