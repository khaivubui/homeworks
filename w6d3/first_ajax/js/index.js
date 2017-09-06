console.log("Hello from the JavaScript console!");

// Your AJAX request here
$.ajax('http://api.openweathermap.org/data/2.5/weather' +
'?q=NY,NY&appid=bcb83c4b54aee8418983c2aff3073b3b',
{
  success (res) {
    console.log(res);
  },
  error (req, status, err) {
    console.log('req', req);
    console.log('status', status);
    console.log('error', err);
  }
});

// Add another console log here, outside your AJAX request
console.log('outside of request');
