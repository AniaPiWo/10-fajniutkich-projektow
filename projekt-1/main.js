const text = document.querySelector('.sampleText');
const input = document.querySelector('.rangeInput');
const select = document.querySelector('.fontSelector');

input.addEventListener('input', function () {
  text.style.fontSize = `${this.value}px`;
});

select.addEventListener('change', function () {
  text.style.fontFamily = this.value;
});
