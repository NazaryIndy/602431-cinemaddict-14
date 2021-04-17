import { getRandomInteger, generateDate } from '../utils.js';

const generateEmotion = () => {
  const emoji = ['smile', 'sleeping', 'puke', 'angry'];

  const randomIndex = getRandomInteger(0, emoji.length - 1);

  return emoji[randomIndex];
};

const generateText = () => {
  const comments = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Cras aliquet varius magna, non porta ligula feugiat eget.',
    'Fusce tristique felis at fermentum pharetra.',
    'Aliquam id orci ut lectus varius viverra.',
    'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
    'Sed sed nisi sed augue convallis suscipit in sed felis.',
    'Aliquam erat volutpat.',
    'Nunc fermentum tortor ac porta dapibus.',
    'In rutrum ac purus sit amet tempus.',
  ];

  const randomIndex = getRandomInteger(0, comments.length - 1);

  return comments[randomIndex];
};

const generateAuthor = () => {
  const authors = [
    'Кристофер Нолан',
    'Александр Роу',
    'Люк Бессон',
    'Роберт Земекис',
    'Педро Альмодовар',
    'Клинт Иствуд',
    'Павел Лунгин',
  ];

  const randomIndex = getRandomInteger(0, authors.length - 1);

  return authors[randomIndex];
};

export const generateComment = () => {
  return {
    emotion: generateEmotion(),
    text: generateText(),
    author: generateAuthor(),
    date: generateDate(),
  };
};
