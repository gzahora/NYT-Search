
var apiKey = "wPzUk0zAVgpMMCORZ8dAhYAIuC9rAytB";
var query = "election";
var q = "{filter}";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&api-key=" + apiKey; 

$.ajax({
    url: queryURL,
    method: "GET"

})

.then(function(response) {
console.log(response.response.docs[0].headline.main);

// when we click "key word" what happens?

var query = $(this).val("#keyWordID");





});
