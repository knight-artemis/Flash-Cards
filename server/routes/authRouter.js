/* eslint-disable import/no-extraneous-dependencies */
const authRouter = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../db/models");

// ВСЕ РОУТЕРЫ БОЕВЫЕ

authRouter.get("/", async (req, res) => {
  res.json({ login: req.session?.login, userId: req.session?.userId });
});

authRouter.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("note").end();
  });
});

authRouter.post("/reg", async (req, res) => {
  const { login, email, password } = req.body;
  const errors = {};
  if (!login) {
    errors.login = "Пожалуйста, придумайте логин.";
  } else if (/[^a-zA-Zа-яА-Я0-9]/.test(login)) {
    errors.login =
      "В логине присутствуют запрещенные символы. Пожалуйста, не ломайте базу.";
  }
  if (!email) errors.email = "Пожалуйста, введите ваш email.";
  if (!password) errors.password = "Пожалуйста, придумайте пароль.";
  if (errors.login || errors.email || errors.password) {
    res.json({ error: errors });
  } else {
    try {
      if (await User.findOne({ where: { login } })) {
        errors.login = "Пользователь с таким логином уже зарегистрирован.";
      }
      if (await User.findOne({ where: { email } })) {
        errors.email = "Пользователь с такой почтой уже зарегистрирован.";
      }
      if (errors.login || errors.email) {
        res.json({ error: errors });
      } else {
        const hash = await bcrypt.hash(password, 10);
        const newUser = await User.create({ login, email, password: hash });
        req.session.login = newUser.login;
        req.session.userId = newUser.id;
        req.session.save(() => {
          console.log("session saved");
        });
        console.log(login, email, hash);
        res.json({
          success: {
            msg: "Успешно!",
            userId: newUser.id,
            login: newUser.login,
          },
        });
      }
    } catch (error) {
      console.log(error);
      res.json({ error: { server: "Внутренняя ошибка сервера." } });
    }
  }
});

authRouter.post("/log", async (req, res) => {
  const { login, password } = req.body;
  const errors = {};
  if (!login) errors.login = "Пожалуйста, введите логин.";
  if (!password) errors.password = "Пожалуйста, введите пароль.";
  if (errors.login || errors.password) {
    res.json({ error: errors });
  } else {
    try {
      let user = await User.findOne({ where: { login } });
      if (!user) user = await User.findOne({ where: { email: login } });
      if (user) {
        if (await bcrypt.compare(password, user.password)) {
          req.session.login = user.login;
          req.session.userId = user.id;
          req.session.save(() => {
            console.log("session saved");
          });
          res.json({
            success: { msg: "Успешно!", userId: user.id, login: user.login },
          });
        } else {
          res.json({ error: { password: "Неверный пароль." } });
        }
      } else {
        res.json({
          error: {
            login: "Пользователя с таким логином или почтой не существует.",
          },
        });
      }
    } catch (error) {
      console.log(error);
      res.json({ error: { server: "Внутренняя ошибка сервера." } });
    }
  }
});

authRouter.put("/editLogin", async (req, res) => {
  const { login } = req.body;
  const { userId } = req.session;
  console.log(login.login, userId, "<=============");

  try {
    const oneItem = await User.findByPk(userId);

    await oneItem.update({
      login: login.login,
    });
    if (oneItem) {
      res.json({ id: oneItem.id, login: oneItem.login });
    } else {
      res.json({ err: "Ошибка при обновлении!" });
    }
  } catch (error) {
    console.log("Ошибка в ручке изменения PUT!", error);
  }
});

authRouter.put("/editPassword", async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const { userId } = req.session;

  console.log("req.body", req.body);
  try {
    const oneItem = await User.findByPk(userId);
    const isPasswordValid = await bcrypt.compare(oldPassword, oneItem.password);

    if (!isPasswordValid) {
      return res.status(400).json({ err: "Неверный старый пароль" });
    }

    const hash = await bcrypt.hash(newPassword, 10);
    await oneItem.update({ password: hash });

    res.json({ msg: "Пароль успешно обновлен!" });
  } catch (error) {
    console.log("Ошибка в ручке изменения PUT!", error);
    res.status(500).json({ err: "Ошибка при обновлении пароля" });
  }
});

module.exports = authRouter;
