const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const preview = document.querySelector('.img-upload__preview img');

const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const scalePreview = (value = DEFAULT_SCALE) => {
  preview.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  let userValue = currentValue - SCALE_STEP;
  if (userValue < MIN_SCALE) {
    userValue = MIN_SCALE;
  }
  scalePreview(userValue);
};

const onBiggerButtonClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  let userValue = currentValue + SCALE_STEP;
  if (userValue > MAX_SCALE) {
    userValue = MAX_SCALE;
  }
  scalePreview(userValue);
};

const resetScale = () => {
  scalePreview();
};

smallerButton.addEventListener('click', onSmallerButtonClick);
biggerButton.addEventListener('click', onBiggerButtonClick);

export {resetScale};
