const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
let { posts } = require('../data/hw-router-posts');


router.get("/", (req, res) => {
  posts.sort((a, b) => b.created - a.created);
  res.send(JSON.stringify(posts));
});

router.get("/:id", (req, res) => {
  const postId = req.params.id;
  const index = posts.findIndex((o) => o.id === postId);
  res.send(JSON.stringify({ post: posts[index] }));
});

router.post("/", (req, res) => {
  posts.push({ ...req.body, id: uuidv4(), created: Date.now() });
  res.status(204).send('OK');
});

router.put("/:id", (req, res) => {
  const postId = req.params.id;
  posts = posts.map((o) => {
    if (o.id === postId) {
      return {
        ...o,
        ...req.body,
        id: o.id,
      };
    }
    return o;
  });
  res.status(204).send('OK');
});

router.delete("/:id", (req, res) => {
  const postId = req.params.id;
  const index = posts.findIndex((o) => o.id === postId);
  if (index !== -1) {
    posts.splice(index, 1);
  }
  res.status(204).send('OK');
});


module.exports = router;
