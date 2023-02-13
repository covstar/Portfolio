setInterval (function () {
  var date = new Date ();
  var hours = date.getHours ();
  var minutes = date.getMinutes ();
  var ampm = hours < 12 ? 'AM' : 'PM';
  hours = hours % 12 || 12;
  $ ('#time').html (hours + ':' + minutes + ' ' + ampm);
}, 1000);

