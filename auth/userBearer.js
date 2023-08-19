const passport = require('passport')
const { Strategy } = require('passport-http-bearer')
const { tokens } = require('./tokens');

passport.use(
  new Strategy((token, callback) => {
    const user = tokens.get(token);
    if (user === undefined) {
      return callback(null, false);
    }

    return callback(null, user);
  })
);


module.exports = passport