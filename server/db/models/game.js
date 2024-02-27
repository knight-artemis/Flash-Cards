'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Game.init(
    {
      userId: DataTypes.INTEGER,
      score: DataTypes.INTEGER,
      isEnded: DataTypes.BOOLEAN,
      snapshot: DataTypes.JSONB,
    },
    {
      sequelize,
      modelName: 'Game',
    },
  );
  return Game;
};
