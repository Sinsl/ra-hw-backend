const express = require('express');
const router = express.Router();


router.get("/hooks/data", async (req, res) => {
  res.send(JSON.stringify({ status: "ok" }));
});

router.get("/hooks/error", async (req, res) => {
  res.status(500).send(JSON.stringify({ status: "Internal Error" }));
});

router.get("/hooks/loading", async (req, res) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
  res.send(JSON.stringify({ status: "ok" }));
});

module.exports = router;
