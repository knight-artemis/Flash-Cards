'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate(models) {
      this.hasMany(models.Card, { foreignKey: "themeId" });
    }
  }
  Theme.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Theme',
    },
  );
  return Theme;
};
