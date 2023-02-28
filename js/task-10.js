`use strict`;
// Cкрипт створення і очищення колекції елементів.
const inputAmount = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const div = document.querySelector('#boxes');
let currentInputValue = 0;

inputAmount.addEventListener('input', onAmountInput);
btnCreate.addEventListener('click', () => createBoxes(currentInputValue));
btnDestroy.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onAmountInput(event) {
  currentInputValue = event.currentTarget.value;
}

function destroyBoxes() {
  div.innerHTML = '';
}

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  let markup = '';
  for (let i = 1; i <= amount; i += 1) {
    const color = getRandomHexColor();
    markup += `<div style="display: flex; background-color: ${color}; width: ${width}px; height: ${height}px; margin: 5px"></div>`;
    width += 10;
    height += 10;
  }
  div.insertAdjacentHTML('beforeend', markup);

  if (amount === 0) {
    alert('Обери кількість!');
  }
}