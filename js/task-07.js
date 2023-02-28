'use strict';
// Напиши скрипт, який реагує на зміни значення input#font - size - control(событие input)
// і змінює інлайн-стиль  span#text оновлюючи властивість font-size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.addEventListener('input', event => {
  let eventValue = event.currentTarget.value;
  span.style.fontSize = `${eventValue}px`;
});