var SubmitButton = document.querySelector("#submit")
var SubmitButton2 = document.querySelector("#button2")
var ResultsPage = './search-results.html';

SubmitButton.addEventListener("click",function(event) {
    event.preventDefault();
    document.location.href = ResultsPage
})

SubmitButton2.addEventListener("click",function(event) {
    event.preventDefault();
})