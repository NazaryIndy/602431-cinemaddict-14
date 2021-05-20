import { createElement } from '../utils.js';

const createLoadingTemplate = () => {
  return '<h2 class="films-list__title">Loading...</h2>';
};

export default class Loading {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createLoadingTemplate();
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
