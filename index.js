fetch('api.openweathermap.org/data/2.5/weather?q=London', { mode: 'cors' }).then(result => {
  console.log(result);
});
