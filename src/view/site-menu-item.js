import { capitalizeFirstLetter, createElement } from '../utils.js';

const createSiteMenuItemTemplate = (filter, isChecked) => {
  const {name, count} = filter;

  const activeFilterClassName = isChecked
    ? 'main-navigation__item--active'
    : '';

  const countTemplate = name === 'all'
    ? ''
    : `<span class="main-navigation__item-count">${count}</span></a>`;

  return `<a href="#${name}" class="main-navigation__item ${activeFilterClassName}">${capitalizeFirstLetter(name)} ${countTemplate}`;
};

export default class SiteMenuItem {
  constructor(filter, isChecked) {
    this._filter = filter;
    this._isChecked = isChecked;
    this._element = null;
  }

  getTemplate() {
    return createSiteMenuItemTemplate(this._filter, this._isChecked);
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
