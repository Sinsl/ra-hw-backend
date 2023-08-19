const express = require('express');
const passport = require('../auth/userBearer');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
let { posts } = require('../data/hw-router-auth');
const { users } = require('../data/users');
const { tokens } = require('../auth/tokens');

const bearerAuth = passport.authenticate("bearer", { session: false });

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = users.find(item => item.username === username);
    if (!user) {
      return res.status(400).json({ auth: false, message: "Пользователь не найден" });
    }

    const result = await bcrypt.compare(password, user.password);
    if (!result) {
      return res.status(400).json({ auth: false, message: "Не верный пароль" });
    }
    const token = uuidv4();
    tokens.set(String(token), user);
    for (let entry of tokens) {
    }
    return res.json({ auth: true, token });
  } catch (error) {
    res.status(500).json({ message: "Внутренняя ошибка сервера" });
  }
});

router.use("/private**", bearerAuth);

router.get("/private/me", async (req, res) => {
  try {
    res.json({
        id: req.user.id,
        login: req.user.username,
        name: req.user.name,
        avatar: req.user.avatar,
      });
  } catch (error) {
    res.status(500).json({ message: "Внутренняя ошибка сервера" });
  }
});

router.get("/private/news", async (req, res) => {
  try {
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Внутренняя ошибка сервера" });
  }
});

router.get("/private/news/:id", async (req, res) => {
  try {
    const item = posts.find(o => o.id === req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Новость не найдена" });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: "Внутренняя ошибка сервера" });
  }
});


module.exports = router; 