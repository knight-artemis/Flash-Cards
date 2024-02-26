const gameEndRouter = require('express').Router();
const { Game, User } = require('../db/models');

gameEndRouter.get('/', async (req, res) => {
  const { userId, login } = req.session;
  try {
    if (login) {
      const game = await Game.findOne({ where: { userId: userId } });
      console.log('eto game v endGame===>', game);
      res.json(game);
    }
  } catch (error) {
    console.log(error);
  }
});
