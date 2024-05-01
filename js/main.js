import { eventOnElmts } from './app.js';

const searchView = document.querySelector('[data-search-view]'); // 숙성요소를 선택하는 법
const searchTogglers = document.querySelectorAll('[data-search-toggler]');

function toggleSearch() {
  searchView.classList.toggle('active');
}

eventOnElmts(searchTogglers, 'click', toggleSearch);
