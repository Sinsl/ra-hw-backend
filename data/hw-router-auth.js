const { v4: uuidv4 } = require('uuid');
const {faker} = require('@faker-js/faker/locale/ru');

const posts = [
  {
    id: uuidv4(),
    title: faker.lorem.sentence({ min: 2, max: 4 }),
    img: 'https://img.goodfon.ru/original/1024x768/2/15/nebo-oblaka-gory-sneg-derevya-4255.jpg',
    content: "Идейные соображения высшего порядка, а также повышение уровня гражданского сознания способствует повышению качества экспериментов, поражающих по своей масштабности и грандиозности.",
    created: 1690923600000
  },
  {
    id: uuidv4(),
    title: faker.lorem.sentence({ min: 2, max: 4 }),
    img: 'https://live.staticflickr.com/8292/7731535764_77af4a3d44_b.jpg',
    content: "Безусловно, семантический разбор внешних противодействий создаёт предпосылки для дальнейших направлений развития.",
    created: 1689973200000
  },
  {
    id: uuidv4(),
    title: faker.lorem.sentence({ min: 2, max: 4 }),
    img: 'https://i09.fotocdn.net/s113/5ff8f4a9854d9bb4/public_pin_l/2539450188.jpg',
    content: "Сложно сказать, почему сторонники тоталитаризма в науке объявлены нарушающими общечеловеческие нормы этики и морали.",
    created: 1686344400000
  },
  {
    id: uuidv4(),
    title: faker.lorem.sentence({ min: 2, max: 4 }),
    img: 'https://cdn1.ozone.ru/s3/multimedia-l/6464782629.jpg',
    content: "А ещё сделанные на базе интернет-аналитики выводы, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены сами себе.",
    created: 1690923602200
  },
  {
    id: uuidv4(),
    title: faker.lorem.sentence({ min: 2, max: 4 }),
    img: 'https://postila.ru/data/33/45/36/53/33453653eeb1813d7e8d79d596ddb08cddf14f3ed911280fcb339c4201888e59.jpg',
    content: "Ясность нашей позиции очевидна: сплочённость команды профессионалов играет важную роль в формировании новых предложений.",
    created: 1689973200330
  },
  {
    id: uuidv4(),
    title: faker.lorem.sentence({ min: 2, max: 4 }),
    img: 'https://i.pinimg.com/originals/cd/e2/2b/cde22b4303fea1e3bdcd11137af13077.jpg',
    content: "Значимость этих проблем настолько очевидна, что разбавленное изрядной долей эмпатии, рациональное мышление предопределяет высокую востребованность вывода текущих активов.",
    created: 1686344400110
  }
];


exports.posts = posts;