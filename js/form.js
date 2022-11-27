import {isEscapeKey} from './util.js';
import {showSuccessMessage, showErrorMessage} from './messages.js';
import {resetScale} from './scale.js';
import {resetEffects} from './effects.js';
import {URL} from './const.js';


const uploadFileControl = document.querySelector('#upload-file');
const imgEditFormOpen = document.querySelector('.img-upload__overlay');
const imgEditFormClose = document.querySelector('#upload-cancel');
const uploadSubmitControl = document.querySelector('#upload-submit');
const form = document.querySelector('.img-upload__form');

function onEditFormEscKeydown (evt) {
  if (isEscapeKey(evt) && !document.querySelector('.error'))
  {
    evt.preventDefault();
    closeImgEditForm ();
  }
}

function openImgEditForm () {
  imgEditFormOpen.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onEditFormEscKeydown);
}

function closeImgEditForm () {
  form.reset();
  resetEffects();
  resetScale();
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

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__error-text'
});

function blockSubmitControl () {
  uploadSubmitControl.disabled = true;
}

function unblockSubmitControl () {
  uploadSubmitControl.disabled = false;
}

function setFormSubmit (onSuccess) {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitControl();
      const formData = new FormData(evt.target);
      fetch(URL,
        {
          method: 'POST',
          body: formData,
        },
      ).then ((response) => {
        if (response.ok) {
          onSuccess();
          showSuccessMessage();
          unblockSubmitControl();
        } else {
          showErrorMessage();
          unblockSubmitControl();
        }
      }).catch (() => {
        showErrorMessage();
        unblockSubmitControl();
      });
    }
  });
}

export {setFormSubmit, openImgEditForm, closeImgEditForm};
