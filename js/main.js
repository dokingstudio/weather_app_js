import { eventOnElmts } from './app.js';

const number = document.querySelectorAll('.current-weather .heading');

function changeColor() {
  number[0].style.color = 'red';
}

eventOnElmts(number, 'click', changeColor);
