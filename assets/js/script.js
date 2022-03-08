var requestUrl = 'https://www.loc.gov/search/?q=baseball&fo=json';

// JQuery AJAX
$.ajax({
  url: requestUrl,
  method: 'GET',
}).then(function (response) {
  console.log('AJAX Response \n-------------');
  console.log(response.results);
});