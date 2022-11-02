import {isEscapeKey} from './util.js';

const uploadFileControl = document.querySelector('#upload-file');
const imgEditFormOpen = document.querySelector('.img-upload__overlay');
const imgEditFormClose = document.querySelector('#upload-cancel');

const onEditFormEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeImgEditForm ();
  }
};

function openImgEditForm () {
  imgEditFormOpen.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onEditFormEscKeydown);
}

function closeImgEditForm () {
  imgEditFormOpen.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onEditFormEscKeydown);
}

uploadFileControl.addEventListener('change', () => {
  openImgEditForm ();
});

imgEditFormClose.addEventListener('click', () => {
  closeImgEditForm ();
});

const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__error-text'
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    fetch('https://27.javascript.pages.academy/kekstagram-simple', {
      method: 'POST',
      body: form
    });}
});
