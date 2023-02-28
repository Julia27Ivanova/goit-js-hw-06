'use strict';
//Cкрипт, який змінює кольори фону елемента <body> 
//через інлайн-стиль по кліку на button.change-color 
//і виводить значення кольору в span.color.
const btnChangeColor = document.querySelector('.change-color');
const spanChangeColor = document.querySelector('.color');
const body = document.querySelector('body');

btnChangeColor.addEventListener('click', onBtnChangeClick);

function onBtnChangeClick() {
  const color = getRandomHexColor();
  spanChangeColor.textContent = color;
  body.style.backgroundColor = color;
}
//Для генерування випадкового кольору 
//використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
