import {
  createSiteMenuTemplate,
  createSiteContentTemplate,
  createSortTemplate,
  createMoviesAmountTemplate,
  createUserProfileTemplate,
  createFilmCardTemplate,
  createFilmDetailsPopup,
  createShowMoreButtonTemplate,
  createListEmptyTemplate
} from './view';

import { generateFilm } from './mock/film.js';
import { generateFilters } from './mock/filter.js';

const FILM_COUNT = 20;
const FILM_COUNT_PER_STEP = 5;
const EXTRA_FILM_COUNT = 2;
const films = new Array(FILM_COUNT).fill().map(generateFilm);
const filters = generateFilters(films);

const render = (container, template, place = 'beforeend') => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterElement = document.querySelector('.footer');

render(siteHeaderElement, createUserProfileTemplate());
render(siteMainElement, createSiteMenuTemplate(filters));
render(siteMainElement, createSortTemplate());
render(siteMainElement, createSiteContentTemplate(films.length));
render(siteFooterElement, createMoviesAmountTemplate(films.length));

const filmsElement = siteMainElement.querySelector('.films');
const filmsListElement = filmsElement.querySelector('.films-list');
const allFilmsElement = filmsElement.querySelector('.films-list .films-list__container');
const mostCommentedElement = filmsElement.querySelector('.most-commented .films-list__container');
const topRatedElement = filmsElement.querySelector('.top-rated .films-list__container');

if (films.length === 0) {
  render(filmsListElement, createListEmptyTemplate());
} else {
  for (let i = 0; i < Math.min(films.length, FILM_COUNT_PER_STEP); i++) {
    render(allFilmsElement, createFilmCardTemplate(films[i]));
  }

  for (let i = 0; i < EXTRA_FILM_COUNT; i++) {
    render(mostCommentedElement, createFilmCardTemplate(films[i]));
  }

  for (let i = 0; i < EXTRA_FILM_COUNT; i++) {
    render(topRatedElement, createFilmCardTemplate(films[i]));
  }

  if (films.length > FILM_COUNT_PER_STEP) {
    let renderedFilmCount = FILM_COUNT_PER_STEP;

    render(filmsListElement, createShowMoreButtonTemplate());
    const showMoreButton = filmsListElement.querySelector('.films-list__show-more');

    showMoreButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      films
        .slice(renderedFilmCount, renderedFilmCount + FILM_COUNT_PER_STEP)
        .forEach((film) => render(allFilmsElement, createFilmCardTemplate(film), 'beforeend'));

      renderedFilmCount += FILM_COUNT_PER_STEP;

      if (renderedFilmCount >= films.length) {
        showMoreButton.remove();
      }
    });
  }

  render(siteMainElement, createFilmDetailsPopup(films[0]));

}
