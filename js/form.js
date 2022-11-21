import {isEscapeKey} from './util.js';
import {showSuccessMessage, showErrorMessage} from './messages.js';
import {resetScale} from './scale.js';
import {resetEffects} from './effects.js';


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

const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__error-text'
});

const setFormSubmit = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(evt.target);
      fetch('https://27.javascript.pages.academy/kekstagram-simple',
        {
          method: 'POST',
          body: formData,
        },
      ).then ((response) => {
        if (response.ok) {
          showSuccessMessage();
        // } else {
        //   showErrorMessage();
        }
      }).catch (() => {
        showErrorMessage();
      });
    }
  });
};


export {setFormSubmit, openImgEditForm, closeImgEditForm};
