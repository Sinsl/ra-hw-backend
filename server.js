const express = require('express');
const cors = require('cors');
const session = require('express-session')
const passport = require('./auth/userLocal')
const cookieParser = require('cookie-parser')


const indexRoute = require('./routes/index');
const testSession = require('./routes/test-session');
const pingRoute = require('./routes/ping');
const httpRoute = require('./routes/hw-http');
const hooksRoute = require('./routes/hw-hooks');
const routerRoute = require('./routes/hw-router');
const routerAuth = require('./routes/hw-router-auth');
const http = require('http');


const app = express();
const server = http.Server(app);   

app.use(cors({
  origin: "*",
  credentials: true,
  allowedHeaders: "Origin, Content-Type, Accept, Authorization",
}));

app.use(session({
  secret: 'SECRET',
  cookie: {
    httpOnly: true,
    // secure: false,
    path: '/',
  },
  SameSite: 'none',
  resave: false,
  saveUninitialized: true
}))


app.use(express.json());
app.use(cookieParser())
app.use(passport.initialize())
app.use(passport.session())



app.use('/', indexRoute);
app.use('/ping', pingRoute);
app.use(express.static(__dirname + '/public/'));
app.use('/hw-http/notes', httpRoute);
app.use('/hw-hooks', hooksRoute);
app.use('/hw-router/posts', routerRoute);
app.use('/hw-router/auth', routerAuth);
app.use('/auth', testSession);

async function start (PORT) {
  try {
    server.listen(PORT);
    console.log(`Сервер запущен: внешний порт ${PORT}`);
  } catch (e) {
    console.log('Ошибка при запуске сервера ', e);
  }
}

const PORT = process.env.PORT || 7070;
start(PORT);

