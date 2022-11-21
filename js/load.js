import {renderPictureList} from './picture.js';
import {closeImgEditForm, openImgEditForm, setFormSubmit} from './form.js';

const showServerErrorMessage = () => {
  const errorItem = document.querySelector('#load-error').content;
  document.body.appendChild(errorItem);
};

fetch ('https://27.javascript.pages.academy/kekstagram-simple/data')
  .then((response) => response.json())
  .then((pictures) => {
    renderPictureList(pictures);
  })
  .catch(() => {
    showServerErrorMessage();
  });

setFormSubmit(closeImgEditForm);
