import {isEscapeKey} from './util.js';

const onSuccessEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessMessage();
  }
};

const onErrorEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrorMessage();
  }
};

const showSuccessMessage = () => {
  const successMessage = document.querySelector('#success').content.cloneNode(true);
  document.body.appendChild(successMessage);

  document.querySelector('.success').addEventListener('click', (evt) => {
    if (evt.target.closest('.success__inner') === null || evt.target.closest('.success__button')) {
      closeSuccessMessage();
    }
  });

  document.addEventListener('keydown', onSuccessEscKeydown);
};

function closeSuccessMessage () {
  const successMessageContainer = document.querySelector('.success');
  document.body.removeChild(successMessageContainer);
  document.removeEventListener('keydown', onSuccessEscKeydown);
}

const showErrorMessage = () => {
  const errorMessage = document.querySelector('#error').content.cloneNode(true);
  document.body.appendChild(errorMessage);

  document.querySelector('.error').addEventListener('click', (evt) => {
    if (evt.target.closest('error__inner') === null || evt.target.closest('.error__button')) {
      closeErrorMessage();
    }
  });

  document.addEventListener('keydown', onErrorEscKeydown);
};

function closeErrorMessage () {
  const errorMessageContainer = document.querySelector('.error');
  document.body.removeChild(errorMessageContainer);
  document.removeEventListener('keydown', onErrorEscKeydown);
}

export {showSuccessMessage, showErrorMessage};
