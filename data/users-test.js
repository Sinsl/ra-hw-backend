
const { v4: uuidv4 } = require('uuid');

const users = [
  {
    id: uuidv4(),
    email: 'info@info.ru',
    avatar: "https://i.pravatar.cc/40",
    password: 'info',
    username: 'info',
    name: 'Info'
  },
  {
    id: uuidv4(),
    email: 'demo@demo.ru',
    avatar: "https://i.pravatar.cc/40",
    password: 'demo',
    username: 'demo',
    name: 'Demo'
  },
  {
    id: uuidv4(),
    email: 'vasya@vasya.ru',
    avatar: "https://i.pravatar.cc/40",
    password: 'vasya',
    username: 'vasya',
    name: 'Vasya'
  },
  {
    id: uuidv4(),
    email: 'test@test.ru',
    avatar: "https://i.pravatar.cc/40",
    password: 'test',
    username: 'test',
    name: 'Test'
  }
]
exports.users = users;