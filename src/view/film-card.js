import { formatDuration, formatDate } from '../utils.js';

const MAX_DESCRIPTION_LENGTH = 140;

export const createFilmCardTemplate = (film) => {
  const {
    title, description, rating, date, duration, genres, poster, comments, isWatchlist, isWatched, isFavorite,
  } = film;

  const shortDescription = description.length <= MAX_DESCRIPTION_LENGTH
    ? description
    : `${description.slice(0, MAX_DESCRIPTION_LENGTH)}...`;

  const watchlistClassName = isWatchlist
    ? 'film-card__controls-item--active'
    : '';

  const watchedClassName = isWatched
    ? 'film-card__controls-item--active'
    : '';

  const favoriteClassName = isFavorite
    ? 'film-card__controls-item--active'
    : '';

  const commentsTemplate = comments.length !== 0
    ? `${comments.length} comments`
    : '';

  return `<article class="film-card">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${formatDate(date, 'YYYY')}</span>
      <span class="film-card__duration">${formatDuration(duration)}</span>
      <span class="film-card__genre">${genres[0]}</span>
    </p>
    <img src="${poster}" alt="" class="film-card__poster">
    <p class="film-card__description">${shortDescription}</p>
    <a class="film-card__comments">${commentsTemplate}</a>
    <div class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${watchlistClassName}" type="button">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${watchedClassName}" type="button">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite ${favoriteClassName}" type="button">Mark as favorite</button>
    </div>
  </article>`;
};
