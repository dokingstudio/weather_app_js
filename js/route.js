const defaultlocation = '#/weather?37.5553452, 126.9198795';

window.navigator.geolocation.getCurrentPosition((position) => {
  const { latitude, longitude } = position.coords;

  console.log(latitude, longitude);
});
