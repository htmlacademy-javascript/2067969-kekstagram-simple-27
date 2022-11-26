const preview = document.querySelector('.img-upload__preview img');
const form = document.querySelector('.img-upload__form');
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level__value');
const effectLevelContainer = document.querySelector('.img-upload__effect-level');

const EFFECTS = {
  none: {
    min: 0,
    max: 100,
    step: 1,
  },
  chrome: {
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
    style: 'grayscale',
  },
  sepia: {
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
    style: 'sepia',
  },
  marvin: {
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
    style: 'invert',
  },
  phobos: {
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
    style: 'blur',
  },
  heat: {
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
    style: 'brightness',
  }
};


const DEFAULT_EFFECT = EFFECTS['none'];
let usedEffect = DEFAULT_EFFECT;

const isDefault = () => usedEffect === DEFAULT_EFFECT;

const updateSlider = () => {
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: usedEffect.min,
      max: usedEffect.max,
    },
    step: usedEffect.step,
    start: usedEffect.max,
  });
  effectLevelContainer.classList.toggle('hidden', isDefault());
};

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  usedEffect = EFFECTS[evt.target.value];
  updateSlider();
};

const onSliderUpdate = () => {
  preview.style.filter = 'none';
  preview.className = '';
  effectLevel.value = '';
  if (isDefault()) {
    return;
  }
  const sliderValue = sliderElement.noUiSlider.get();
  preview.style.filter = `${usedEffect.style}(${sliderValue}${usedEffect.unit})`;
  preview.classList.add(`effects__preview--${usedEffect.name}`);
  effectLevel.value = sliderValue;
};

const resetEffects = () => {
  usedEffect = DEFAULT_EFFECT;
  updateSlider();
};

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});
updateSlider();

form.addEventListener('change', onFormChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);

export {resetEffects};
