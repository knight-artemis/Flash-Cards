const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Notepad, { foreignKey: 'notepad_id' });
    }
  }
  Note.init({
    note_title: DataTypes.STRING,
    note_text: DataTypes.TEXT,
    notepad_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Note',
  });
  return Note;
};
