import {
  createSiteMenuTemplate,
  createSiteContentTemplate,
  createSortTemplate,
  createMoviesAmountTemplate,
  createUserProfileTemplate,
  createFilmCardTemplate
} from './view';

const FILMS_COINT = 5;
const EXTRA_FILMS_COUNT = 2;

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
const extraFilmsElements = filmsElement.querySelectorAll('.films-list--extra .films-list__container');

for (let i = 0; i < FILMS_COINT; i++) {
  render(allFilmsElement, createFilmCardTemplate());
}

for (let i = 0; i < extraFilmsElements.length; i++) {
  for (let j = 0; j < EXTRA_FILMS_COUNT; j++) {
    render(extraFilmsElements[j], createFilmCardTemplate());
  }
}
