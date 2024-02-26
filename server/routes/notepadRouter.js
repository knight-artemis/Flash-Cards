const express = require('express');
const { Notepad } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const { userId } = req.session;
  if (userId) {
    const notepads = await Notepad.findAll({ where: { user_id: userId } });
    res.json(notepads);
  } else {
    res.json([]);
  }
});

// router.get('/:id', async (req, res) => {
//   const todo = await Todo.findByPk(req.params.id);
//   res.json(todo);
// });

router.post('/', async (req, res) => {
  const { userId } = req.session;
  console.log(req.session);
  if (userId) {
    const { title } = req.body;
    console.log(req.body);
    const todo = await Notepad.create({ notepad_title: title, user_id: req.session.userId });
    res.json(todo);
  } else {
    res.sendStatus(401);
  }
});

// router.patch('/:id', async (req, res) => {
//   const todo = await Todo.findByPk(req.params.id);
//   await todo.update(req.body);
//   res.json(todo);
// });

// router.put('/:id', async (req, res) => {
//   console.log(req.body);
//   const todo = await Todo.findByPk(req.params.id);
//   await todo.update(req.body);
//   res.json(todo);
// });

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  if (id) {
    try {
      await Notepad.destroy({ where: { id: req.params.id } });
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
      console.log(error);
    }
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
