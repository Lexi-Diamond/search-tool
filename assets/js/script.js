
var requestUrl = 'https://www.loc.gov/search/?q=baseball&fo=json';

// JQuery AJAX
$.ajax({
  url: requestUrl,
  method: 'GET',
}).then(function (response) {
  console.log('AJAX Response \n-------------');
  console.log(response.results);
});

var SubmitButton = document.querySelector("#submit")
var SubmitButton2 = document.querySelector("#button2")
var ResultsPage = "./search-results.html"

SubmitButton.addEventListener("click",function() {
    document.location.replace(ResultsPage)
})

SubmitButton2.addEventListener("click",)

