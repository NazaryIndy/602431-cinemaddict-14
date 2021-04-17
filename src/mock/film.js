import { getRandomInteger, getRandomFloat, getRandomDate } from '../utils.js';
import { generateComment } from './comment.js';

const MIN_SENTENCE_AMOUNT = 1;
const MAX_SENTENCE_AMOUNT = 5;
const MIN_COMMENTS_AMOUNT = 0;
const MAX_COMMENTS_AMOUNT = 5;
const MIN_GENRE_AMOUNT = 1;
const MAX_GENRE_AMOUNT = 3;
const MIN_ACTORS_AMOUNT = 1;
const MAX_ACTORS_AMOUNT = 6;
const MIN_SCREENWRITERS_AMOUNT = 1;
const MAX_SCREENWRITERS_AMOUNT = 3;
const MIN_DURATION = 90;
const MAX_DURATION = 120;

const generateComments = () => {
  const commentsAmount = getRandomInteger(MIN_COMMENTS_AMOUNT, MAX_COMMENTS_AMOUNT);
  const filmComments = [];

  for (let i = 0; i <= commentsAmount; i++) {
    filmComments.push(generateComment());
  }

  return filmComments;
};

const generateTitle = () => {
  const titles = [
    'Властелин колец 3: Возвращение Короля',
    'Терминатор 2: Судный день',
    'Побег из Шоушенка',
    'Властелин колец 2: Две крепости',
    'Форрест Гамп',
  ];

  const randomIndex = getRandomInteger(0, titles.length - 1);

  return titles[randomIndex];
};

const generateAltTitle = () => {
  const alternativeTitles = [
    'The Lord of the Rings: The Return of the King',
    'Terminator 2: Judgment Day',
    'The Shawshank Redemption',
    'The Lord of the Rings: The Two Towers',
    'Forrest Gump',
  ];

  const randomIndex = getRandomInteger(0, alternativeTitles.length - 1);

  return alternativeTitles[randomIndex];
};

const generateAgeRating = () => {
  const ages = [3, 6, 12, 18];

  const randomIndex = getRandomInteger(0, ages.length - 1);

  return ages[randomIndex];
};

const generatePoster = () => {
  const posters = [
    './images/posters/made-for-each-other.png',
    './images/posters/popeye-meets-sinbad.png',
    './images/posters/sagebrush-trail.jpg',
    './images/posters/santa-claus-conquers-the-martians.jpg',
    './images/posters/the-dance-of-life.jpg',
    './images/posters/the-great-flamarion.jpg',
    './images/posters/the-man-with-the-golden-arm.jpg',
  ];

  const randomIndex = getRandomInteger(0, posters.length - 1);

  return posters[randomIndex];
};

const generateDescription = () => {
  const descriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Cras aliquet varius magna, non porta ligula feugiat eget.',
    'Fusce tristique felis at fermentum pharetra.',
    'Aliquam id orci ut lectus varius viverra.',
    'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
    'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
    'Sed sed nisi sed augue convallis suscipit in sed felis.',
    'Aliquam erat volutpat.',
    'Nunc fermentum tortor ac porta dapibus.',
    'In rutrum ac purus sit amet tempus.',
  ];

  const randomAmount = getRandomInteger(MIN_SENTENCE_AMOUNT, MAX_SENTENCE_AMOUNT);
  let description = '';

  for (let i = 0; i < randomAmount; i++) {
    description += descriptions[getRandomInteger(0, descriptions.length - 1)] + ' ';
  }

  return description.trim();
};

const generateGenres = () => {
  const genres = [
    'Боевик',
    'Вестерн',
    'Гангстерский фильм',
    'Детектив',
    'Драма',
    'Исторический фильм',
    'Комедия',
    'Мелодрама',
  ];

  const randomAmount = getRandomInteger(MIN_GENRE_AMOUNT, MAX_GENRE_AMOUNT);
  const filmGenres = [];

  for (let i = 0; i < randomAmount; i++) {
    filmGenres.push(genres[getRandomInteger(0, genres.length - 1)]);
  }

  return filmGenres;
};

const generateCountry = () => {
  const countries = [
    'Китай',
    'Япония',
    'Германия',
    'Индия',
    'Великобритания',
    'Франция',
    'Италия',
    'Бразилия',
    'Канада',
  ];

  const randomIndex = getRandomInteger(0, countries.length - 1);

  return countries[randomIndex];
};

const generateDirector = () => {
  const directors = [
    'Кристофер Нолан',
    'Александр Роу',
    'Люк Бессон',
    'Роберт Земекис',
    'Педро Альмодовар',
    'Клинт Иствуд',
    'Павел Лунгин',
  ];

  const randomIndex = getRandomInteger(0, directors.length - 1);

  return directors[randomIndex];
};

const generateActors = () => {
  const actors = [
    'Деми Мур',
    'Джет Ли',
    'Джеки Чан',
    'Джим Керри',
    'Сара Джессика Паркер',
    'Киану Ривз',
    'Леонардо ДиКаприо',
    'Том Круз',
  ];

  const randomAmount = getRandomInteger(MIN_ACTORS_AMOUNT, MAX_ACTORS_AMOUNT);
  const filmActors = [];

  for (let i = 0; i < randomAmount; i++) {
    filmActors.push(actors[getRandomInteger(0, actors.length - 1)]);
  }

  return filmActors;
};

const generateScreenwriters = () => {
  const screenwriters = [
    'Деми Мур',
    'Джет Ли',
    'Джеки Чан',
    'Джим Керри',
    'Сара Джессика Паркер',
    'Киану Ривз',
    'Леонардо ДиКаприо',
    'Том Круз',
  ];

  const randomAmount = getRandomInteger(MIN_SCREENWRITERS_AMOUNT, MAX_SCREENWRITERS_AMOUNT);
  const filmScreenwriters = [];

  for (let i = 0; i < randomAmount; i++) {
    filmScreenwriters.push(screenwriters[getRandomInteger(0, screenwriters.length - 1)]);
  }

  return filmScreenwriters;
};

export const generateFilm = () => {
  return {
    title: generateTitle(),
    alternativeTitle: generateAltTitle(),
    poster: generatePoster(),
    description: generateDescription(),
    comments: generateComments(),
    rating: getRandomFloat(0, 10).toFixed(1),
    duration: getRandomInteger(MIN_DURATION, MAX_DURATION),
    genres: generateGenres(),
    director: generateDirector(),
    screenwriters: generateScreenwriters(),
    actors: generateActors(),
    date: getRandomDate(),
    country: generateCountry(),
    ageRating: generateAgeRating(),
    isWatchlist: Boolean(getRandomInteger(0, 1)),
    isWatched: Boolean(getRandomInteger(0, 1)),
    isFavourite: Boolean(getRandomInteger(0, 1)),
  };
};
