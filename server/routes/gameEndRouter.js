const gameEndRouter = require('express').Router();
const { Game } = require('../db/models');

gameEndRouter.get('/:id', async (req, res) => {
  const { userId, login } = req.session;
  const { id } = req.params;
  try {
    const game = await Game.findByPk(id);
    console.log('eto game v endGame===>', game.get({ plain: true }));
    res.json({ game });
  } catch (error) {
    console.log(error);
  }
});

module.exports = gameEndRouter;
