const slider = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');
const preview = document.querySelector('.img-upload__preview');
const effectButtons = document.querySelectorAll('.effects__radio');

noUiSlider.create(slider, {
  start:[1],
  range: {
    'min': 0,
    'max': 1
  },
  step:0.1
});

function updateSlider(min, max, step) {
  slider.noUiSlider.updateOptions({
    start: [max],
    range: {
      'min': min,
      'max': max
    },
    step:step
  });
}

let currentEffect = 'none';
function addEffectHandler(button) {
  button.addEventListener('change', () => {
    preview.classList.remove(`effects__preview--${currentEffect}`);
    preview.classList.add(`effects__preview--${button.value}`);
    currentEffect = button.value;
    switch (currentEffect) {
      case 'chrome':
        effectValue.value = 1;
        updateSlider(0, 1, 0.1);
        preview.style.filter = `grayscale(${effectValue.value})`;
        break;
      case 'sepia':
        effectValue.value = 1;
        updateSlider(0, 1, 0.1);
        preview.style.filter = `sepia(${effectValue.value})`;
        break;
      case 'marvin':
        effectValue.value = 100;
        updateSlider(0, 100, 1);
        preview.style.filter = `invert(${effectValue.value}%)`;
        break;
      case 'phobos':
        effectValue.value = 3;
        updateSlider(0, 3, 0.1);
        preview.style.filter = `blur(${effectValue.value}px)`;
        break;
      case 'heat':
        effectValue.value = 3;
        updateSlider(1, 3, 0.1);
        preview.style.filter = `brightness(${effectValue.value})`;
        break;
      case 'none':
        preview.style.filter = '';
        break;
    }
  });
}

for (let i = 0; i < effectButtons.length; i++) {
  addEffectHandler(effectButtons[i]);
}

slider.noUiSlider.on('slide', () => {
  effectValue.value = slider.noUiSlider.get(true);
  switch (currentEffect) {
    case 'chrome':
      preview.style.filter = `grayscale(${effectValue.value})`;
      break;
    case 'sepia':
      preview.style.filter = `sepia(${effectValue.value})`;
      break;
    case 'marvin':
      preview.style.filter = `invert(${effectValue.value}%)`;
      break;
    case 'phobos':
      preview.style.filter = `blur(${effectValue.value}px)`;
      break;
    case 'heat':
      preview.style.filter = `brightness(${effectValue.value})`;
      break;
  }
});
