'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.eu/rest/v2/name/portugal`);
request.send();

console.log(request.responseText);

request.addEventListener('load', function () {
  console.log(this.responseText);
});
