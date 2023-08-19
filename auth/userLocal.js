const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const { users } = require('../data/users-test');

const verifyPassword = (user, password) => {
  return user.password === password
}

passport.use('local', new localStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback : true
}, 
(req, username, password, done) => {
  console.log('entry auth')
  console.log(username)
  const user = users.find((item) => item.username === username);
  console.log(user)
  if(!user) { return done(null, false) }
  if (!verifyPassword(user, password)) {
    console.log('not auth')
    return done(null, false)
  }
  console.log('auth user')
  done(null, user)      
}));


passport.serializeUser((user, cb) => {
  console.log('seril', user.id)
  cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
  console.log('deseril', id);
  const user = users.find(item => item.id === id);
  console.log(user)
  if (!user) { return cb('Пользователь не найден') }
  cb(null, user)
});






// passport.serializeUser((user, cb) => {
//   console.log('seral')
//   console.log(user)
//   cb(null, user);
// })

// passport.deserializeUser((user, cb) => {
//   console.log('deseral')
//   console.log(user)
//   cb(null, user)
// });
// passport.serializeUser((user, done) => {
//   console.log('seral')
//   console.log(user)
//   return done(null, user)
// });
// passport.deserializeUser((user, done) => {
//   console.log('deseral')
//   console.log(user)
//   return done(null, user)
// });

module.exports = passport