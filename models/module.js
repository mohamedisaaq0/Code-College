const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
class modules extends Model {
}

modules.init({
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
    type: DataTypes.FLOAT,
    allowNull: false,
    unique: true,
  },

  languageId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'module',
}
);
