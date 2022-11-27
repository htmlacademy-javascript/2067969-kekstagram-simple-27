import {renderPictureList} from './picture.js';
import {closeImgEditForm, setFormSubmit} from './form.js';
import {URLDATA} from './const.js';

const showServerErrorMessage = () => {
  const errorItem = document.querySelector('#load-error').content;
  document.body.appendChild(errorItem);
};

fetch (URLDATA)
  .then((response) => response.json())
  .then((pictures) => {
    renderPictureList(pictures);
  })
  .catch(() => {
    showServerErrorMessage();
  });

setFormSubmit(closeImgEditForm);
