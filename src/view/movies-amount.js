import { createElement } from '../utils.js';

const createMoviesAmountTemplate = (amount) => {
  return `<section class="footer__statistics">
    <p>${amount} movies inside</p>
  </section>`;
};

export default class MoviesAmount {
  constructor(amount) {
    this._amount = amount;
    this._element = null;
  }

  getTemplate() {
    return createMoviesAmountTemplate(this._amount);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
