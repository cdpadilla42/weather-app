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
  temp = convertKelvin(weatherObj.main.temp);
  desc = formatDesc(weatherObj.weather[0].description);
  main = weatherObj.weather[0].main;
  city = weatherObj.name;
  country = weatherObj.sys.country;

  return { temp, desc, main, city, country };
}

function convertKelvin(temp) {
  return Math.floor(temp - 273.15);
}

function formatDesc(desc) {
  let descArr = desc.split('');
  const upperCase = descArr[0].toUpperCase();
  return [upperCase, ...descArr.slice(1, descArr.length)].join('');
}

const giphyFetch = search => {
  // make request with search value
  return fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=zy6b59zxSkFlTzAC3WW4UDmKMNMnFLVV&s=${search}&weirdness=1`,
    { mode: 'cors' }
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      return response;
    })
    .catch(error => {
      console.log('not found!');
      img.src =
        'https://media2.giphy.com/media/xUA7bbo8QK36rb4R44/giphy.gif?cid=32b4e94ce2b84492fe64c91d37d0793e1f56c1a21d3b3477&rid=giphy.gif';
    });
  // update the image
};

function renderResults(neededResultsObj, imageUrl) {
  const mainElem = document.querySelector('#main');
  const descElm = document.querySelector('#description');
  const tempElm = document.querySelector('#temperature');
  const locationElm = document.querySelector('#location-text');
  const imgDiv = document.querySelector('#gif');
  const img = document.createElement('img');

  // Is this a chance for OBJECT DESTRUCTURING???

  const { temp, desc, main, city, country } = neededResultsObj;

  mainElem.innerText = main;
  descElm.innerText = desc;
  tempElm.innerText = `${temp} Celcius`;
  locationElm.innerText = `in ${city}, ${country}`;

  img.src = imageUrl;
  imgDiv.innerHTML = '';
  imgDiv.appendChild(img);
}

async function onFormSubmit(e) {
  e.preventDefault();
  const searchVal = document.querySelector('#city').value;
  const fetchResults = await fetchData(searchVal);
  const neededResults = extractAPIData(fetchResults);
  console.log(neededResults.main);
  const giphyObj = await giphyFetch(neededResults.main);
  const giphyUrl = giphyObj.data.images.original.url;
  renderResults(neededResults, giphyUrl);
}

document.querySelector('.form').addEventListener('submit', onFormSubmit);
