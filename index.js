fetch(
  'https://api.openweathermap.org/data/2.5/weather?q=London&APPID=3071d7049f77d2a60a294f98fadfa6f3',
  {
    mode: 'cors'
  }
)
  .then(result => {
    return result.json();
  })
  .then(result => {
    console.log(result);
  });

// API Key:
// 3071d7049f77d2a60a294f98fadfa6f3

// Grab:
// Main (sunny, cloudy, rain)
// Temperature (in Kelvin first)
// Precipitation: %
// Funny picture based off main haha
