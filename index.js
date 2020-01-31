let temp;
let desc;
let main;
let city;
let country;

function fetchData(searchVal) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchVal}&APPID=3071d7049f77d2a60a294f98fadfa6f3`,
    {
      mode: 'cors'
    }
  )
    .then(result => {
      return result.json();
    })
    .then(result => {
      return result;
    })
    .catch(error => new Error('woops!'));
}

function extractAPIData(weatherObj) {
  temp = weatherObj.main.temp;
  desc = weatherObj.weather[0].description;
  main = weatherObj.weather[0].main;
  city = weatherObj.name;
  country = weatherObj.sys.country;

  return { temp, desc, main, city, country };
}

function renderResults(neededResultsObj) {
  const mainElem = document.querySelector('#main');
  const descElm = document.querySelector('#description');
  const tempElm = document.querySelector('#temperature');

  // Is this a chance for OBJECT DESTRUCTURING???

  const { temp, desc, main, city, country } = neededResultsObj;

  mainElem.innerText = main;
  descElm.innerText = desc;
  tempElm.innerText = temp;
}

async function onFormSubmit(e) {
  e.preventDefault();
  const searchVal = document.querySelector('#city').value;
  const fetchResults = await fetchData(searchVal);
  const neededResults = extractAPIData(fetchResults);
  renderResults(neededResults);
}

document.querySelector('.form').addEventListener('submit', onFormSubmit);
