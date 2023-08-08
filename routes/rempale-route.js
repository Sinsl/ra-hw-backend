const express = require('express');
const router = express.Router();


router.get("/", (req, res) => { 
  res.json(JSON.stringify());
});

router.post("/", (req, res) => {
  notes.push({ ...req.body, id: uuidv4()});
  res.status(204).send('OK');
});

router.delete("/:id", (req, res) => {
  const noteId = req.params.id;
  const index = notes.findIndex((o) => o.id === noteId);
  if (index !== -1) {
    notes.splice(index, 1);
  }
  res.status(204).send('OK');
});

module.exports = router;

