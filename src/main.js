import {
  createSiteMenuTemplate,
  createSiteContentTemplate,
  createSortTemplate,
  createMoviesAmountTemplate,
  createUserProfileTemplate,
  createFilmCardTemplate
} from './view';

import { generateFilm } from './mock/film.js';

const FILMS_COUNT = 20;
const FILMS_TEMPLATE_COUNT = 5;
const EXTRA_FILMS_COUNT = 2;
const films = new Array(FILMS_COUNT).fill().map(generateFilm);

const render = (container, template, place = 'beforeend') => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterElement = document.querySelector('.footer');

render(siteHeaderElement, createUserProfileTemplate());
render(siteMainElement, createSiteMenuTemplate());
render(siteMainElement, createSortTemplate());
render(siteMainElement, createSiteContentTemplate());
render(siteFooterElement, createMoviesAmountTemplate());

const filmsElement = siteMainElement.querySelector('.films');
const allFilmsElement = filmsElement.querySelector('.films-list .films-list__container');
const mostCommentedElement = filmsElement.querySelector('.most-commented .films-list__container');
const topRatedElement = filmsElement.querySelector('.top-rated .films-list__container');

for (let i = 0; i < FILMS_TEMPLATE_COUNT; i++) {
  render(allFilmsElement, createFilmCardTemplate(films[i]));
}

for (let i = 0; i < EXTRA_FILMS_COUNT; i++) {
  render(mostCommentedElement, createFilmCardTemplate(films[i]));
}

for (let i = 0; i < EXTRA_FILMS_COUNT; i++) {
  render(topRatedElement, createFilmCardTemplate(films[i]));
}

