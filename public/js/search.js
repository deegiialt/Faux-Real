
console.log("here");

$(document).ready(function(){

//var keys = require("./keys.js");


//var newsAPI = keys.apiNewsKey;

 $("#trending").on("click", function(){

     searchTopHeadlines();

})

function searchTopHeadlines(){
      var url = 'https://newsapi.org/v2/top-headlines?' +
              'country=us&' +
              'apiKey=b8438b744ce24b42a60f3a56367a00c4';

      var req = new Request(url);

      $.ajax({
        url: url,
        method: "GET",

      }).then(function(response){
        console.log(response);
        return renderArticles(response.articles);
      });
};

function renderArticles(searchResponse){

    for(var i = 0; i < 10; i++){

      var newPanel = $("<div>"); 
      var newPanelHeading = $("<div>");
      newPanelHeading.attr("class", "panel-heading" + searchResponse[i])
      newPanelHeading.attr("id", "articleHead")
      newPanelHeading.append("<h3>" + searchResponse[i].source.name + "</h>");
      newPanelHeading.append("<h4>" + searchResponse[i].author + "</h4>");
      var newPanelBody = $("<div>");
      newPanelBody.attr("class", searchResponse[i])
      newPanelBody.attr("id", "articleBody");
      newPanelBody.append("<p>" + searchResponse[i].description + "</p>");
      newPanelBody.append("<a href=" + "'" + searchResponse[i].url + "'" + "target='_blank'" + ">" + "Go to Article" + "</a>");

      newPanel.append(newPanelHeading);
      newPanel.append(newPanelBody);

      $("#div-section").append(newPanel);

    };
};



function searchInternational(){
    


}





//searchTopHeadlines();
















})
