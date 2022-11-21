import {isEscapeKey} from './util.js';

const successMessageContainer = document.querySelector('.success');
const successButton = document.querySelector('.success__button');


// const onSuccessEscKeydown = (evt) => {
//   if (isEscapeKey(evt)) {
//     evt.preventDefault();
//     document.body.removeChild(successMessageContainer);
//   }
// };

const showSuccessMessage = () => {
  const successMessage = document.querySelector('#success').content;
  document.body.appendChild(successMessage);

  // document.addEventListener('keydown', onSuccessEscKeydown);
};

// function closeSuccessMessage () {
//   document.body.removeChild(successMessageContainer);
//   document.body.classList.remove('modal-open');
// }

// successButton.addEventListener('click', () => {
//   closeSuccessMessage ();
// });

const showErrorMessage = () => {
  const errorMessage = document.querySelector('#error').content;
  document.body.appendChild(errorMessage);
};

export {showSuccessMessage};
export {showErrorMessage};

