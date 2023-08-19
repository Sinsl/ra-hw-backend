const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const rounds = 10;

const users = [
  {
    id: uuidv4(),
    email: 'info@info.ru',
    avatar: "https://i.pravatar.cc/40",
    password: bcrypt.hashSync("info", rounds),
    username: 'info',
    name: 'Info'
  },
  {
    id: uuidv4(),
    email: 'demo@demo.ru',
    avatar: "https://i.pravatar.cc/40",
    password: bcrypt.hashSync("demo", rounds),
    username: 'demo',
    name: 'Demo'
  },
  {
    id: uuidv4(),
    email: 'vasya@vasya.ru',
    avatar: "https://i.pravatar.cc/40",
    password: bcrypt.hashSync("vasya", rounds),
    username: 'vasya',
    name: 'Vasya'
  },
  {
    id: uuidv4(),
    email: 'test@test.ru',
    avatar: "https://i.pravatar.cc/40",
    password: bcrypt.hashSync("test", rounds),
    username: 'test',
    name: 'Test'
  }
]
exports.users = users;