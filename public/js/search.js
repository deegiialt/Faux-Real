
console.log("here");

$(document).ready(function(){

//var keys = require("./keys.js");


//var newsAPI = keys.apiNewsKey;

$("#trending").on("click", function(){
     searchTopHeadlines();
})

$("#search-submit").on("click", function(){
      $("#div-section").empty();
      searchKeyword();
});

$("#business").on("click", function(){
      $("#div-section").empty();
      searchBusiness();
});

$("#sports").on("click", function(){
      $("#div-section").empty();
      searchSports();
})

$("#entertainment").on("click", function(){
      searchEntertainment();
})


//trending tab search

function searchTopHeadlines(){
      var url = 'https://newsapi.org/v2/top-headlines?' +
              'country=us&' +
              'apiKey=b8438b744ce24b42a60f3a56367a00c4';
      $.ajax({
        url: url,
        method: "GET",

      }).then(function(response){
        console.log(response);
        return renderArticles(response.articles);
      });
};



//seach bar function

function searchKeyword(){

  var keyword = $(".form-control").val().trim();

  var url = 'https://newsapi.org/v2/everything?' +
              'q=' + keyword + '&' +
              'language=en&' +
              'sortBy=relevancy&' +
              'sortBy=popularity&' +
              'apiKey=b8438b744ce24b42a60f3a56367a00c4';
      $.ajax({
        url: url,
        method: "GET",

      }).then(function(response){
        console.log(response);
        return renderArticles(response.articles);
      });
}

//business tab search

function searchBusiness(){

  var url = 'https://newsapi.org/v2/top-headlines?' +
              'country=us&' +
              'category=business&' +
              'apiKey=b8438b744ce24b42a60f3a56367a00c4'
      $.ajax({
        url: url,
        method: "GET",

      }).then(function(response){
        console.log(response);
        return renderArticles(response.articles);
      });

}

//sports tab search

function searchSports(){
      var url = 'https://newsapi.org/v2/top-headlines?' +
              'country=us&' +
              'category=sports&' +
              'apiKey=b8438b744ce24b42a60f3a56367a00c4'
      $.ajax({
        url: url,
        method: "GET",

      }).then(function(response){
        console.log(response);
        return renderArticles(response.articles);
      });
}

//entertainment tab search

function searchEntertainment(){
    var url = 'https://newsapi.org/v2/top-headlines?' +
              'country=us&' +
              'category=entertainment&' +
              'apiKey=b8438b744ce24b42a60f3a56367a00c4'
      $.ajax({
        url: url,
        method: "GET",

      }).then(function(response){
        console.log(response);
        return renderArticles(response.articles);
      });



}

//this function will render all other search functions

function renderArticles(searchResponse){
  //searchResponse.length

    for(var i = 0; i < 5; i++){

      var newPanel = $("<div>"); 
      newPanel.attr("class", "headBodyPanel")
      var newPanelHeading = $("<div>");
      newPanelHeading.attr("class", "panel-heading")
      newPanelHeading.attr("id", "articleHead-" + i)
      newPanelHeading.append("<h3>" + searchResponse[i].source.name + "</h>");
      newPanelHeading.append("<h4>" + searchResponse[i].author + "</h4>");
      var newPanelBody = $("<div>");
      newPanelBody.attr("class", "panel-body")
      newPanelBody.attr("id", "articleBody-" + i);
      newPanelBody.append("<p>" + searchResponse[i].description + "</p>");
      newPanelBody.append("<a href=" + "'" + searchResponse[i].url + "'" + "target='_blank'" + ">" + "Go to Article" + "</a>");

      newPanel.append(newPanelHeading);
      newPanel.append(newPanelBody);

      $("#div-section").append(newPanel);

    };
};


//searchTopHeadlines();

})
