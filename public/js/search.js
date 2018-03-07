$(document).ready(function(){

var keys = require("./keys.js");


var newsAPI = keys.apiNewsKey;

function searchTopHeadlines(){
      var url = 'https://newsapi.org/v2/top-headlines?' +
              'country=us&' +
              'apiKey=newsAPI';

      var req = new Request(url);

      $.ajax({
        url: url,
        method: "GET",

      })

      fetch(req)
          .then(function(response) {
              console.log(response.json());
          })

}



$.get("api/search/")


















})
