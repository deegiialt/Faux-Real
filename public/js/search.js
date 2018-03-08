
console.log("here");

$(document).ready(function(){


$("#trending").on("click", function(){
    $("#div-section").empty();
    searchTopHeadlines();
})

$("#search-submit").on("click", function(){
      $("#div-section").empty();
      var start = $("#startDate").val();
      var end = $("#endDate").val();
      if($('#all').is(':checked')){
        if(start!= "" && end!=""){
          console.log("working");
            var keyword = $(".form-control").val().trim();

            var url = 'https://newsapi.org/v2/everything?' +
              'q=' + keyword + '&' +
              'language=en&' +
              'sortBy=publishedAt&' +
              'sortBy=relevancy&' +
              'sortBy=popularity&' +
              'from=' + start + '&' +
              'to=' + end + '&' +
              'apiKey=b8438b744ce24b42a60f3a56367a00c4';

              return searchKeyword(url);

        }else{
            var keyword = $(".form-control").val().trim();

            var url = 'https://newsapi.org/v2/everything?' +
                  'q=' + keyword + '&' +
                  'language=en&' +
                  'sortBy=publishedAt&' +
                  'sortBy=relevancy&' +
                  'sortBy=popularity&' +
                  'apiKey=b8438b744ce24b42a60f3a56367a00c4';
            searchKeyword(url);
      }
      }else if($('#cnn').is(':checked')){
        if(start!= "" && end!=""){
          console.log("working");
            var keyword = $(".form-control").val().trim();

            var url = 'https://newsapi.org/v2/everything?' +
              'q=' + keyword + '&' +
              'sources=cnn&' +
              'language=en&' +
              'sortBy=publishedAt&' +
              'sortBy=relevancy&' +
              'sortBy=popularity&' +
              'from=' + start + '&' +
              'to=' + end + '&' +
              'apiKey=b8438b744ce24b42a60f3a56367a00c4';

              return searchKeyword(url);

        }else{
            var keyword = $(".form-control").val().trim();

            var url = 'https://newsapi.org/v2/everything?' +
              'q=' + keyword + '&' +
              'sources=cnn&' +
              'language=en&' +
              'sortBy=publishedAt&' +
              'sortBy=relevancy&' +
              'sortBy=popularity&' +
              'apiKey=b8438b744ce24b42a60f3a56367a00c4';
            searchKeyword(url);


        searchCNN();
        }
      }else if($('#the-wall-street-journal').is(':checked')){
        searchWallStreet();
      }else if($('#the-huffington-post').is(':checked')){
        searchHuffPost()
      }else if($('#vice-news').is(':checked')){
        searchVice();
      }else if($('#usa-today').is(':checked')){
        searchUSA();
      }else if($('#google-news').is(':checked')){
        searchGoogle();
      }else if($('#buzzfeed').is(':checked')){
        searchBuzzfeed();
      }
      
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
      $("#div-section").empty();
      searchEntertainment();
})

$("#technology").on("click", function(){
      $("#div-section").empty();
      searchTech();
})




//the next 8 functions are for the search option menu

//ALL seach bar function
function searchKeyword(url){

  var keyword = $(".form-control").val().trim();

  var url = url;
      $.ajax({
        url: url,
        method: "GET",

      }).then(function(response){
        console.log(response);
        return renderArticles(response.articles);
      });
}

function searchCNN(){

  var keyword = $(".form-control").val().trim();

  
      $.ajax({
        url: url,
        method: "GET",

      }).then(function(response){
        console.log(response);
        return renderArticles(response.articles);
      });
}

function searchWallStreet(){

  var keyword = $(".form-control").val().trim();

  var url = 'https://newsapi.org/v2/everything?' +
              'q=' + keyword + '&' +
              'sources=the-wall-street-journal&' +
              'language=en&' +
              'sortBy=publishedAt&' +
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

function searchHuffPost(){

  var keyword = $(".form-control").val().trim();

  var url = 'https://newsapi.org/v2/everything?' +
              'q=' + keyword + '&' +
              'sources=the-huffington-post&' +
              'language=en&' +
              'sortBy=publishedAt&' +
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

function searchVice(){

  var keyword = $(".form-control").val().trim();

  var url = 'https://newsapi.org/v2/everything?' +
              'q=' + keyword + '&' +
              'sources=vice-news&' +
              'language=en&' +
              'sortBy=publishedAt&' +
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

function searchUSA(){

  var keyword = $(".form-control").val().trim();

  var url = 'https://newsapi.org/v2/everything?' +
              'q=' + keyword + '&' +
              'sources=usa-today&' +
              'language=en&' +
              'sortBy=publishedAt&' +
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

function searchGoogle(){

  var keyword = $(".form-control").val().trim();

  var url = 'https://newsapi.org/v2/everything?' +
              'q=' + keyword + '&' +
              'sources=google-news&' +
              'language=en&' +
              'sortBy=publishedAt&' +
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

function searchBuzzfeed(){

  var keyword = $(".form-control").val().trim();

  var url = 'https://newsapi.org/v2/everything?' +
              'q=' + keyword + '&' +
              'sources=buzzfeed&' +
              'language=en&' +
              'sortBy=publishedAt&' +
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
//================================================================
//================================================================
//================================================================

//the remainder of the functions are for the tab options on the page
//business tab search

//trending tab search

function searchTopHeadlines(){
      var url = 'https://newsapi.org/v2/top-headlines?' +
              'country=us&' +
              'sortBy=publishedAt&' +
              'apiKey=b8438b744ce24b42a60f3a56367a00c4';
      $.ajax({
        url: url,
        method: "GET",

      }).then(function(response){
        console.log(response);
        return renderArticles(response.articles);
      });
};

function searchBusiness(){

  var url = 'https://newsapi.org/v2/top-headlines?' +
              'country=us&' +
              'category=business&' +
              'sortBy=publishedAt&' +
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
              'sortBy=publishedAt&' +
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
              'sortBy=publishedAt&' +
              'apiKey=b8438b744ce24b42a60f3a56367a00c4'
      $.ajax({
        url: url,
        method: "GET",

      }).then(function(response){
        console.log(response);
        return renderArticles(response.articles);
      });
}

function searchTech(){
    var url = 'https://newsapi.org/v2/top-headlines?' +
              'country=us&' +
              'category=technology&' +
              'sortBy=publishedAt&' +
              'apiKey=b8438b744ce24b42a60f3a56367a00c4'
      $.ajax({
        url: url,
        method: "GET",

      }).then(function(response){
        console.log(response);
        return renderArticles(response.articles);
      });
}

//========================================================
//========================================================
//========================================================
//this function will render all other search functions

function renderArticles(searchResponse){

    for(var i = 0; i < searchResponse.length; i++){

      var newPanel = $("<div>"); 
      newPanel.attr("class", "headBodyPanel")
      var newPanelHeading = $("<div>");
      newPanelHeading.attr("class", "panel-heading")
      newPanelHeading.attr("id", "articleHead-" + i)
      newPanelHeading.append("<h3>" + searchResponse[i].source.name + "</h3>");
      newPanelHeading.append("<h4>" + searchResponse[i].author + "</h4>");
      var newPanelBody = $("<div>");
      newPanelBody.attr("class", "panel-body")
      newPanelBody.attr("id", "articleBody-" + i);
      newPanelBody.append("<p>" + searchResponse[i].description + "</p>");
      newPanelBody.append("<a href=" + "'" + searchResponse[i].url + "'" + "target='_blank'" + ">" + "Go to Article" + "</a>");
      var fauxNewButton = $("<button>Faux</button>");
      var realNewButton = $("<button>Real</button>");
      fauxNewButton.attr("class", "fauxButton")
      fauxNewButton.attr("id", "faux-" + searchResponse[i].url);
      realNewButton.attr("class", "realButton");
      realNewButton.attr("id", "real-" + searchResponse[i].url);



      newPanel.append(newPanelHeading);
      newPanel.append(newPanelBody);
      newPanel.append(fauxNewButton);
      newPanel.append(realNewButton)

      $("#div-section").append(newPanel);

    };
};


//searchTopHeadlines();

})
