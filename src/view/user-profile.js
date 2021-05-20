import { capitalizeFirstLetter, createElement } from '../utils.js';

const createUserProfileTemplate = ({status}) => {
  return `<section class="header__profile profile">
    <p class="profile__rating">${capitalizeFirstLetter(status)}</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`;
};


export default class UserProfile {
  constructor(status) {
    this._status = status;
    this._element = null;
  }

  getTemplate() {
    return createUserProfileTemplate(this._status);
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
