const gameRouter = require('express').Router();
const { Theme, Card, Game } = require('../db/models');

gameRouter.get('/', async (req, res) => {
  try {
    const rawGames = await Theme.findAll({ attributes: ['title'], include: { model: Card, attributes: ['id', 'question', 'answer', 'points'] } });
    const games = rawGames.map((el) => el.get({ plain: true }));
    res.json(games);
  } catch (error) {
    console.log(error);
  }
});

gameRouter.get('/check', async (req, res) => {
  const { userId, login } = req.session;
  try {
    if (userId) {
      const games = await Game.findAll({ where: { userId } });
      //   console.log(games.map((el) => el.get({ plain: true })));
      res.json({ game: games.filter((el) => el.isEnded === false).at(-1) });
    } else {
      res.json({ game: undefined });
    }
  } catch (error) {
    console.log(error);
  }
});

gameRouter.post('/', async (req, res) => {
  const { userId, login } = req.session;
  try {
    console.log('>>>>>>>>>>>', userId);
    let game = await Game.findOne({ where: { userId }, order: [['id', 'DESC']] });
    console.log(game);
    if (game && !game.isEnded) {
      res.json({ game });
    } else {
      game = await Game.create({ userId });
      res.json({ game });
    }
  } catch (error) {
    console.log(error);
  }
});

gameRouter.patch('/:id', async (req, res) => {
  const { userId, login } = req.session;
  const { id } = req.params;
  const { score } = req.body;
  console.log(score);
  try {
    const game = await Game.findByPk(id);
    game.score = score;
    await game.save();
    res.json({ game });
  } catch (error) {
    console.log(error);
  }
});

gameRouter.put('/:id', async (req, res) => {
  const { userId, login } = req.session;
  const { id } = req.params;
  try {
    const game = await Game.findByPk(id);
    game.isEnded = true;
    await game.save();
    res.json({ game });
  } catch (error) {
    console.log(error);
  }
});

module.exports = gameRouter;
