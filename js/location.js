if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition (function (position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var url =
      'https://api.opencagedata.com/geocode/v1/json?q=' +
      lat +
      '+' +
      lng +
      '&key=4e67535a55e74e348a2e652ca685b79d';
    $.getJSON (url, function (data) {
      var city = data.results[0].components.city;
      var country = data.results[0].components.country;
      $ ('#location').html (city + ', ' + country);
    });
  });
} else {
  $ ('#location').html ('Geolocation is not supported by this browser.');
}
