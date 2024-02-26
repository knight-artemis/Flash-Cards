'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notepad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Note, { foreignKey: 'notepad_id' });
      this.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  Notepad.init({
    notepad_title: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Notepad',
  });
  return Notepad;
};