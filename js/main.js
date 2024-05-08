import { eventOnElmts } from './app.js';
import { url, fetchData } from './api.js';
import * as module from './moudule.js';

// 검색 화면 토글 기능
const searchView = document.querySelector('[data-search-view]'); // 속성 요소를 선택하는 방법
const searchTogglers = document.querySelectorAll('[data-search-toggler]');

console.log(url.geocode('london'));

function toggleSearch() {
  searchView.classList.toggle('active');
}

eventOnElmts(searchTogglers, 'click', toggleSearch);

const searchField = document.querySelector('[data-search-field]');
const searchResult = document.querySelector('[data-search-result]');

let searchTimeout = null;
const searchTimeoutDuration = 500;

searchField.addEventListener('input', function () {
  if (!searchField.value) {
    searchField.classList.remove('searching');
    searchResult.innerHTML = '';
  } else {
    searchField.classList.add('searching');
  }

  if (searchField.value) {
    if (!searchField.value) return;

    fetchData(url.geocode(searchField.value), function (location) {
      console.log(location);
      searchResult.innerHTML = '<ul class="view-list" data-search-list></ul>';
      /**
       * @type{array}items:검색 결과를 담을 배열
       */
      const items = [];

      for (let { name, lat, lon, country, state } of location) {
        const searchItem = document.createElement('li');
        searchItem.classList.add('view-item');
        searchItem.innerHTML = `
        <span class="m-icon">location_on</span>
                <div>
                  <p class="item-title">${name}</p>
                  <p class="label-2">${state || ''}, ${country}</p>
                </div>
                <a href="#/weather?lat=${lat}&lon=${lon}" class="item-link has-state" data-search-toggler></a>
        `;

        searchResult
          .querySelector('[data-search-list]')
          .appendChild(searchItem);

        items.push(searchItem.querySelector('[data-search-toggler]'));
      }

      for (let { name, lat, country, state } of location) {
        const searchItem = document.createElement('li');
        searchItem.classList.add('view-item');
        searchItem.innerHTML = `
         <span class="m-icon">location_on</span>
               <div>
                 <p class="item-title">${name}</p>
                 <p class="label-2">${state || ''}, ${country}</p>
               </div>
               <a href="#/weather?lat=${lat}&lon=${lon}" class="item-link has-state"
               data-search-toggler></a>
         `;

        searchResult
          .querySelector('[data-search-list]')
          .appendChild(searchItem);

        items.push(searchItem.querySelector('[data-search-toggler]'));
      }

      eventOnElmts(items, 'click', function () {
        toggleSearch();
      });
    });

    searchTimeout = setTimeout(() => {
      searchField.classList.remove('searching');
    }, searchTimeoutDuration);
  }
});
