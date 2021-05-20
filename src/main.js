import MoviesAmountView from './view/movies-amount.js';
import ListEmptyView from './view/list-empty.js';
import ShowMoreButtonView from './view/show-more-button.js';
import SortView from './view/sort.js';
import FilmsListView from './view/films-list.js';
import TopRatedFilmsListView from './view/top-rated-films-list.js';
import MostCommentedFilmsListView from './view/most-commented-films-list.js';

import NewCommentView from './view/new-comment.js';
import UserProfileView from './view/user-profile.js';
import StatsView from './view/stats.js';
import FilmDetailsView from './view/film-details.js';
import FilmCardView from './view/film-card.js';

import SiteMenuView from './view/site-menu.js';
import SiteMenuItemView from './view/site-menu-item.js'

import { render, RenderPosition } from './utils.js';

import { generateFilm } from './mock/film.js';
import { generateFilters } from './mock/filter.js';
import { generateUserInfo } from './mock/user.js';

const FILM_COUNT = 20;
const FILM_COUNT_PER_STEP = 5;
const EXTRA_FILM_COUNT = 2;
const films = new Array(FILM_COUNT).fill().map(generateFilm);
const filters = generateFilters(films);
const userInfo = generateUserInfo(films);

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterElement = document.querySelector('.footer');

const renderFilmPopup = (filmListElement, film) => {
  const filmComponent = new FilmDetailsView(film);

  render(filmListElement, filmComponent.getElement(), RenderPosition.BEFOREEND);
};

const renderFilmCard = (filmListElement, film) => {
  const filmComponent = new FilmCardView(film);

  render(filmListElement, filmComponent.getElement(), RenderPosition.BEFOREEND);
};

render(siteFooterElement, new UserProfileView(userInfo).getElement(), RenderPosition.BEFOREEND);
render(siteMainElement, new SiteMenuView().getElement(), RenderPosition.BEFOREEND);

const navigationItemElement = document.querySelector('.main-navigation__items');

filters
  .map((filter, index) => render(navigationItemElement, new SiteMenuItemView(filter, index === 0).getElement(), RenderPosition.BEFOREEND))
  .join('');

render(siteMainElement, new SortView().getElement(), RenderPosition.BEFOREEND);
render(siteFooterElement, new MoviesAmountView(films.length).getElement(), RenderPosition.BEFOREEND);
render(siteMainElement, new FilmsListView().getElement(), RenderPosition.BEFOREEND);

const filmsElement = siteMainElement.querySelector('.films');
render(filmsElement, new TopRatedFilmsListView().getElement(), RenderPosition.BEFOREEND);
render(filmsElement, new MostCommentedFilmsListView().getElement(), RenderPosition.BEFOREEND);

const filmsListElement = filmsElement.querySelector('.films-list');
const allFilmsElement = filmsElement.querySelector('.films-list .films-list__container');
const mostCommentedElement = filmsElement.querySelector('.most-commented .films-list__container');
const topRatedElement = filmsElement.querySelector('.top-rated .films-list__container');

if (films.length === 0) {
  render(filmsListElement, new ListEmptyView().getElement(), RenderPosition.BEFOREEND);
} else {
  for (let i = 0; i < Math.min(films.length, FILM_COUNT_PER_STEP); i++) {
    render(allFilmsElement, new FilmCardView(films[i]).getElement(), RenderPosition.BEFOREEND);
  }

  for (let i = 0; i < EXTRA_FILM_COUNT; i++) {
    render(mostCommentedElement, new FilmCardView(films[i]).getElement(), RenderPosition.BEFOREEND);
  }

  for (let i = 0; i < EXTRA_FILM_COUNT; i++) {
    render(topRatedElement, new FilmCardView(films[i]).getElement(), RenderPosition.BEFOREEND);
  }

  if (films.length > FILM_COUNT_PER_STEP) {
    let renderedFilmCount = FILM_COUNT_PER_STEP;

    render(filmsListElement, new ShowMoreButtonView().getElement(), RenderPosition.BEFOREEND);
    const showMoreButton = filmsListElement.querySelector('.films-list__show-more');

    showMoreButton.addEventListener('click', (evt) => {
      evt.preventDefault();

      films
        .slice(renderedFilmCount, renderedFilmCount + FILM_COUNT_PER_STEP)
        .forEach((film) =>  render(allFilmsElement, new FilmCardView(film).getElement(), RenderPosition.BEFOREEND));

      renderedFilmCount += FILM_COUNT_PER_STEP;

      if (renderedFilmCount >= films.length) {
        showMoreButton.remove();
      }
    });
  }

  render(siteMainElement, new StatsView(userInfo).getElement(), RenderPosition.BEFOREEND);

  // render(siteMainElement, new FilmDetailsView(films[0]).getElement(), RenderPosition.BEFOREEND);

  // const newCommentElement = document.querySelector('.film-details__new-comment');
  // render(newCommentElement, new NewCommentView().getElement(), RenderPosition.BEFOREEND);
}
