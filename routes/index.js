const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
  res.status(200).json({msg: 'server for module react'});
})

module.exports = router;