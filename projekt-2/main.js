const brightness = document.querySelector('#brightness');
const contrast = document.querySelector('#contrast');
const saturation = document.querySelector('#saturation');
const hue = document.querySelector('#hue');
const blur = document.querySelector('#blur');
//const img = document.querySelector('.example-img');
const root = document.documentElement;
const scroller = document.querySelector('.scroller');
const tekst = document.querySelector('.tekst');

/* const updateFilters = () => {
  img.style.filter = `brightness(${brightness.value}%) contrast(${contrast.value}%) saturate(${saturation.value}%) hue-rotate(${hue.value}deg) blur(${blur.value}px)`;
}; */

const updateFilters = () => {
  root.style.setProperty('--brightness', `${brightness.value}%`);
  root.style.setProperty('--contrast', `${contrast.value}%`);
  root.style.setProperty('--saturation', `${saturation.value}%`);
  root.style.setProperty('--hue', `${hue.value}deg`);
  root.style.setProperty('--blur', `${blur.value}px`);
};

[brightness, contrast, saturation, blur, hue].forEach((input) => {
  input.addEventListener('input', updateFilters);
});

scroller.addEventListener('click', () => {
  tekst.scrollIntoView({ behavior: 'smooth' });
});
