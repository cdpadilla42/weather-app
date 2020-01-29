let temp;
let desc;
let main;
function fetchData(searchValue) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&APPID=3071d7049f77d2a60a294f98fadfa6f3`,
    {
      mode: 'cors'
    }
  )
    .then(result => {
      return result.json();
    })
    .then(result => {
      // the question IS - how am I going to get this data to the other parts of the code that need it?
      // does EVERYTHING need to be in the then function?? PROBABLY SO!!! Let's DOIT!
      console.log(extractAPIData(result));
    })
    .catch(error => new Error('woops!'));
}

function extractAPIData(weatherObj) {
  temp = weatherObj.main.temp;
  desc = weatherObj.weather[0].description;
  main = weatherObj.weather[0].main;

  return { temp, desc, main };
}

async function onFormSubmit(e) {
  // e.preventDefault();
  // get values from form
  const searchVal = document.querySelector('#city').value;
  // submit into fetch function
  const fetchResults = await fetchData(searchVal);
  console.log(fetchResults);
  // extract necessary data
  const neededResults = extractAPIData(fetchResults);
  // render the page (console.log)
  console.log(neededResults);
}

// API Key:
// 3071d7049f77d2a60a294f98fadfa6f3

// Grab:
// Main (sunny, cloudy, rain)
// Temperature (in Kelvin first)
// Wind
// Funny picture based off main haha
