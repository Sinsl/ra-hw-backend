const express = require('express');
const router = express.Router();
const passport = require('../auth/userLocal');
const { v4: uuidv4 } = require('uuid');


router.get("/", (req, res) => { 
  res.json(JSON.stringify({msg: 'start'}));
});

router.post('/login', 
 passport.authenticate('local', { failureMessage: true }),
(req, res) => {
  console.log('Авторизация')
  console.log(req.user)
  res.json({user: req.user});
})

router.get('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err) }
    res.json({user: false})
  })
})

router.get('/test',
(req, res, next) => {
  if(!req.isAuthenticated()){
    console.log('Не авторизирован для перехода на профиль')
    return res.json({msg: 'Not auth'});
  }
  next()
},
(req, res) => {
  res.json({msg: 'yes auth'})
}
)


module.exports = router;