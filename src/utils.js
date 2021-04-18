import dayjs from 'dayjs';

// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomFloat = (a = 1, b = 0) => {
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  return lower + Math.random() * (upper - lower);
};

const getRandomDate = (start = new Date(1950, 0, 1), end = new Date()) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const formatDate = (value, format = 'YYYY') => {
  return dayjs(value).format(format);
};

const formatDuration = (duration) => {
  const hours = Math.trunc(duration / 60);
  const minutes = duration % 60;
  return `${hours}h ${minutes}m`;
};

const getRandomId = () => {
  return Math.random().toString(36).substr(2, 9);
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export { getRandomFloat, getRandomInteger, getRandomDate, formatDate, formatDuration, getRandomId, capitalizeFirstLetter };
