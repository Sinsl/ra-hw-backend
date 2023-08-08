const express = require('express');
const cors = require('cors');


const indexRoute = require('./routes/index');
const pingRoute = require('./routes/ping');
const httpRoute = require('./routes/hw-http');
const hooksRoute = require('./routes/hw-hooks');
const http = require('http');


const app = express();
const server = http.Server(app);


app.use(cors());
app.use(express.json());
// app.use(express.urlencoded());


app.use('/', indexRoute);
app.use('/ping', pingRoute);
app.use(express.static(__dirname + '/public/'));
app.use('/hw-http/notes', httpRoute);
app.use('/hw-hooks', hooksRoute);

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

