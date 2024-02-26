'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Theme, { foreignKey: "themeId" });
    }
  }
  Card.init({
    themeId: DataTypes.INTEGER,
    answer: DataTypes.STRING,
    question: DataTypes.STRING,
    points: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};