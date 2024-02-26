const gameRouter = require('express').Router();
const { Theme, Card } = require('../db/models');

gameRouter.get('/', async (req, res) => {
    try {
        const rawGames = await Theme.findAll({ attributes: ['title'], include: { model: Card, attributes: ['id', 'question', 'answer', 'points'] } });
        const games = rawGames.map((el) => el.get({ plain: true }));
        res.json(games);
    } catch (error) {
        console.log(error);
    }
});

module.exports = gameRouter;
