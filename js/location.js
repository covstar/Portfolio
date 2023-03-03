$(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      var apikey = '4e67535a55e74e348a2e652ca685b79d'; // Replace with your OpenCage API key
      var url = 'https://api.opencagedata.com/geocode/v1/json?q=' +   lat +  '+' +  lon + '&key=' +  apikey;
      $.getJSON(url, function(data) {
        var city = data.results[0].components.city;
        var country = data.results[0].components.country;
        $('#location').html(city + ', ' + country);
      });
    });
  } else {
    $('#location').html('Geolocation is not supported by this browser.');
  }
});
