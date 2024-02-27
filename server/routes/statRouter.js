const statRouter = require('express').Router();
const { Game } = require('../db/models');

statRouter.get('/personalStat', async (req, res) => {
    const { userId } = req.session;
    try {
        const myGamesRaw = Game.findAll({ where: userId, attributes: ['id', 'score', 'isEnded'] });
        const myGames = myGamesRaw.map((el) => el.get({ plain: true }));
        res.send(myGames)
    } catch (error) {
        console.log(error, 'ошибка в ручке personalStat');
    }
});

statRouter.get('/globalStat', async (req, res) => {
    try {
        const myGamesRaw = Game.findAll({ attributes: ['id', 'userId', 'score', 'isEnded'] });
        const myGames = myGamesRaw.map((el) => el.get({ plain: true }));
        res.send(myGames)
    } catch (error) {
        console.log(error, 'ошибка в ручке personalStat');
    }
});

module.exports = statRouter;
