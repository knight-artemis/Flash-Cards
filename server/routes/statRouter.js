const statRouter = require("express").Router();
const { Game } = require("../db/models");

statRouter.get("/personalStat", async (req, res) => {
  console.log("мама я в рулончике");
  const { userId } = req.session;
  console.log("🚀 ~ statRouter.get ~ userId:", userId);

  try {
    const myGamesRaw = await Game.findAll({
      where: { userId },
      attributes: ["id", "score", "isEnded"],
    });
    console.log("🚀 ~ statRouter.get ~ myGamesRaw:", myGamesRaw);
    const myGames = myGamesRaw.map((el) => el.get({ plain: true }));
    console.log("🚀 ~ statRouter.get ~ myGames:", myGames);

    res.send(myGames);
  } catch (error) {
    console.log(error, "ошибка в ручке personalStat");
  }
});

statRouter.get("/globalStat", async (req, res) => {
  try {
    const myGamesRaw = Game.findAll({
      attributes: ["id", "userId", "score", "isEnded"],
    });
    const myGames = myGamesRaw.map((el) => el.get({ plain: true }));
    res.send(myGames);
  } catch (error) {
    console.log(error, "ошибка в ручке personalStat");
  }
});

module.exports = statRouter;
