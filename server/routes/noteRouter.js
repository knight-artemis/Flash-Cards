const express = require('express');
const { Notepad, Note } = require('../db/models');

const router = express.Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  if (id) {
    const notes = await Note.findAll({
      where: {
        notepad_id: id,
      },
      order: [['id', 'DESC']],
    });
    res.json({ notes });
  } else {
    res.json({ notes: [] });
  }
});

router.post('/:id', async (req, res) => {
  const { userId } = req.session;
  const { id } = req.params;
  if (userId && id) {
    try {
      const note = await Note.create({
        note_title: 'New note',
        note_text: 'Type something here!',
        notepad_id: id,
      });
      res.json(note);
    } catch (error) {
      console.log(error);
      res.json({});
    }
  } else {
    res.json({});
  }
});

router.patch('/:id', async (req, res) => {
  const note = await Note.findByPk(req.params.id);
  await note.update(req.body);
  res.json(note);
});

// router.put('/:id', async (req, res) => {
//   console.log(req.body);
//   const todo = await Todo.findByPk(req.params.id);
//   await todo.update(req.body);
//   res.json(todo);
// });

router.delete('/:id', async (req, res) => {
  const { userId } = req.session;
  const { id } = req.params;
  if (userId && id) {
    try {
      await Note.destroy({ where: { id } });
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
