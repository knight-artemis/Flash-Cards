'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate(models) {
      this.belongsTo(models.Theme, { foreignKey: 'themeId' });
    }
  }
  Card.init(
    {
      themeId: DataTypes.INTEGER,
      answer: DataTypes.STRING,
      question: DataTypes.STRING,
      points: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Card',
    },
  );
  return Card;
};
