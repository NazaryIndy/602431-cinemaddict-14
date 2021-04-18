import { capitalizeFirstLetter } from '../utils.js';

const createSiteMenuItemTemplate = (filter, isChecked) => {
  const {name, count} = filter;

  const activeFilterClassName = isChecked
    ? 'main-navigation__item--active'
    : '';

  return `<a href="#${name}" class="main-navigation__item ${activeFilterClassName}">${capitalizeFirstLetter(name)} <span class="main-navigation__item-count">${count}</span></a>`;
};

export const createSiteMenuTemplate = (filterItems) => {
  const filterItemsTemplate = filterItems
    .map((filter, index) => createSiteMenuItemTemplate(filter, index === 0))
    .join('');

  return `<nav class="main-navigation">
    <div class="main-navigation__items">
      ${filterItemsTemplate}
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;
};
