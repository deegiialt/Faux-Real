
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
      var keyword = $(".form-control").val().trim();

      if($('#all').is(':checked')){
        if(start!= "" || end!=""){
          var check = validateDate();
          if(check == false) return;
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
        if(start!= "" || end!=""){
          var check = validateDate();
          if(check == false) return;
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

              return searchCNN(url);

        }else{
            var url = 'https://newsapi.org/v2/everything?' +
              'q=' + keyword + '&' +
              'sources=cnn&' +
              'language=en&' +
              'sortBy=publishedAt&' +
              'sortBy=relevancy&' +
              'sortBy=popularity&' +
              'apiKey=b8438b744ce24b42a60f3a56367a00c4';
            searchCNN(url);
        }
      }else if($('#the-wall-street-journal').is(':checked')){
          if(start!= "" || end!=""){
            var check = validateDate();
            if(check == false) return;
            var url = 'https://newsapi.org/v2/everything?' +
              'q=' + keyword + '&' +
              'sources=the-wall-street-journal&' +
              'language=en&' +
              'sortBy=publishedAt&' +
              'sortBy=relevancy&' +
              'sortBy=popularity&' +
              'from=' + start + '&' +
              'to=' + end + '&' +
              'apiKey=b8438b744ce24b42a60f3a56367a00c4';

              return searchWallStreet(url);

        }else{
            var url = 'https://newsapi.org/v2/everything?' +
              'q=' + keyword + '&' +
              'sources=the-wall-street-journal&' +
              'language=en&' +
              'sortBy=publishedAt&' +
              'sortBy=relevancy&' +
              'sortBy=popularity&' +
              'apiKey=b8438b744ce24b42a60f3a56367a00c4';
            searchWallStreet(url);
        }
      }else if($('#the-huffington-post').is(':checked')){
        if(start!= "" || end!=""){
          var check = validateDate();
          if(check == false) return;
            var url = 'https://newsapi.org/v2/everything?' +
              'q=' + keyword + '&' +
              'sources=the-huffington-post&' +
              'language=en&' +
              'sortBy=publishedAt&' +
              'sortBy=relevancy&' +
              'sortBy=popularity&' +
              'from=' + start + '&' +
              'to=' + end + '&' +
              'apiKey=b8438b744ce24b42a60f3a56367a00c4';

              return searchHuffPost(url);

        }else{
            var url = 'https://newsapi.org/v2/everything?' +
              'q=' + keyword + '&' +
              'sources=the-huffington-post&' +
              'language=en&' +
              'sortBy=publishedAt&' +
              'sortBy=relevancy&' +
              'sortBy=popularity&' +
              'apiKey=b8438b744ce24b42a60f3a56367a00c4';
            searchHuffPost(url);
        }
      }else if($('#vice-news').is(':checked')){
        if(start!= "" || end!=""){
          var check = validateDate();
          if(check == false) return;
            var url = 'https://newsapi.org/v2/everything?' +
              'q=' + keyword + '&' +
              'sources=vice-news&' +
              'language=en&' +
              'sortBy=publishedAt&' +
              'sortBy=relevancy&' +
              'sortBy=popularity&' +
              'from=' + start + '&' +
              'to=' + end + '&' +
              'apiKey=b8438b744ce24b42a60f3a56367a00c4';

              return searchVice(url);

        }else{
            var url = 'https://newsapi.org/v2/everything?' +
              'q=' + keyword + '&' +
              'sources=vice-news&' +
              'language=en&' +
              'sortBy=publishedAt&' +
              'sortBy=relevancy&' +
              'sortBy=popularity&' +
              'apiKey=b8438b744ce24b42a60f3a56367a00c4';
            searchVice(url);
        }
      }else if($('#usa-today').is(':checked')){
        if(start!= "" || end!=""){
          var check = validateDate();
          if(check == false) return;
            var url = 'https://newsapi.org/v2/everything?' +
              'q=' + keyword + '&' +
              'sources=usa-today&' +
              'language=en&' +
              'sortBy=publishedAt&' +
              'sortBy=relevancy&' +
              'sortBy=popularity&' +
              'from=' + start + '&' +
              'to=' + end + '&' +
              'apiKey=b8438b744ce24b42a60f3a56367a00c4';

              return searchUSA(url);

        }else{
            var url = 'https://newsapi.org/v2/everything?' +
              'q=' + keyword + '&' +
              'sources=usa-today&' +
              'language=en&' +
              'sortBy=publishedAt&' +
              'sortBy=relevancy&' +
              'sortBy=popularity&' +
              'apiKey=b8438b744ce24b42a60f3a56367a00c4';
            searchUSA(url);
        }
      }else if($('#google-news').is(':checked')){
        if(start!= "" || end!=""){
          var check = validateDate();
          if(check == false) return;
            var url = 'https://newsapi.org/v2/everything?' +
              'q=' + keyword + '&' +
              'sources=google-news&' +
              'language=en&' +
              'sortBy=publishedAt&' +
              'sortBy=relevancy&' +
              'sortBy=popularity&' +
              'from=' + start + '&' +
              'to=' + end + '&' +
              'apiKey=b8438b744ce24b42a60f3a56367a00c4';

              return searchGoogle(url);

        }else{
            var url = 'https://newsapi.org/v2/everything?' +
              'q=' + keyword + '&' +
              'sources=google-news&' +
              'language=en&' +
              'sortBy=publishedAt&' +
              'sortBy=relevancy&' +
              'sortBy=popularity&' +
              'apiKey=b8438b744ce24b42a60f3a56367a00c4';
            searchGoogle(url);
        }
      }else if($('#buzzfeed').is(':checked')){
        if(start!= "" || end!=""){
          var check = validateDate();
          if(check == false) return;
            var url = 'https://newsapi.org/v2/everything?' +
              'q=' + keyword + '&' +
              'sources=buzzfeed&' +
              'language=en&' +
              'sortBy=publishedAt&' +
              'sortBy=relevancy&' +
              'sortBy=popularity&' +
              'from=' + start + '&' +
              'to=' + end + '&' +
              'apiKey=b8438b744ce24b42a60f3a56367a00c4';

              return searchBuzzfeed(url);

        }else{
            

            var url = 'https://newsapi.org/v2/everything?' +
              'q=' + keyword + '&' +
              'sources=buzzfeed&' +
              'language=en&' +
              'sortBy=publishedAt&' +
              'sortBy=relevancy&' +
              'sortBy=popularity&' +
              'apiKey=b8438b744ce24b42a60f3a56367a00c4';
            searchBuzzfeed(url);
        }
      }
    $(".form-control").val("")
      
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

  var url = url;
      $.ajax({
        url: url,
        method: "GET",

      }).then(function(response){
        console.log(response);
        return renderArticles(response.articles);
      });
}

function searchCNN(url){
  
      $.ajax({
        url: url,
        method: "GET",

      }).then(function(response){
        console.log(response);
        return renderArticles(response.articles);
      });
}

function searchWallStreet(url){

      $.ajax({
        url: url,
        method: "GET",

      }).then(function(response){
        console.log(response);
        return renderArticles(response.articles);
      });
}

function searchHuffPost(url){

      $.ajax({
        url: url,
        method: "GET",

      }).then(function(response){
        console.log(response);
        return renderArticles(response.articles);
      });
}

function searchVice(url){

      $.ajax({
        url: url,
        method: "GET",

      }).then(function(response){
        console.log(response);
        return renderArticles(response.articles);
      });
}

function searchUSA(url){

      $.ajax({
        url: url,
        method: "GET",

      }).then(function(response){
        console.log(response);
        return renderArticles(response.articles);
      });
}

function searchGoogle(url){

      $.ajax({
        url: url,
        method: "GET",

      }).then(function(response){
        console.log(response);
        return renderArticles(response.articles);
      });
}

function searchBuzzfeed(url){

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
      newPanel.attr("class", "main");

      var newPanelList = $("<ul>");
      newPanelList.attr("id", "og-grid");
      newPanelList.attr("class", "og-grid");
      newPanel.append(newPanelList);
      var listItemOne = $("<li>")
      var aTag = $("<a>");
      aTag.attr("href", searchResponse[i].url);
      aTag.attr("data-largesrc", searchResponse[i].urlToImage);
      aTag.attr("data-description", searchResponse[i].description);
      var image = $("<img>");
      image.attr("src", searchResponse[i].urlToImage);
      image.attr("width", "250px");
      image.attr("height", "250px");
      aTag.append(image);
      listItemOne.append(aTag)
      // listItemOne.append("<a href=" + searchResponse[i].url + 
      //                     " data-largesrc=" + searchResponse[i].urlToImage + 
      //                     " data-title=" + searchResponse[i].title + 
      //                     " data-description=" + searchResponse[i].description + ">" + 
      //                     "<img src=" + searchResponse[i].urlToImage + " width= 250px height=250px/> </a>")
      newPanelList.append(listItemOne);

      // var tileContent = $("<div>");
      // listItemOne.append(tileContent);
      // tileContent.append("<p class= 'tileTitle'>" + searchResponse[i].title + "</p>");
      // tileContent.append("<p class= 'tileSource'>" + searchResponse[i].source.name + "</p>");
      // tileContent.append("<p class= 'tileDate'>" + searchResponse[i].publishedAt + "</p>");
      // var listItemTwo = $("<li>")

      $("#div-section").append(newPanel);

      // <div class="main">
      //                       <ul id="og-grid" class="og-grid">
      //                           <li>
      //                               <a href="http://cargocollective.com/jaimemartinez/" data-largesrc="images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.">
      //                                   <!-- <img src="http://via.placeholder.com/250x250" alt="img01"/> -->
      //                                   <div class="tileContent">
      //                                       <p class="tileTitle">Example Title</p>
      //                                       <p class="tileSource">CNN</p>
      //                                       <p class="tileDate">Date</p>
      //                                   </div>
      //                               </a>
      //                           </li>
      //                           <li>
      //                               <a href="http://cargocollective.com/jaimemartinez/" data-largesrc="images/2.jpg" data-title="Veggies sunt bona vobis" data-description="Komatsuna prairie turnip wattle seed artichoke mustard horseradish taro rutabaga ricebean carrot black-eyed pea turnip greens beetroot yarrow watercress kombu.">
      //                                   <img src="http://via.placeholder.com/250x250" alt="img02"/>
      //                               </a>
      //                           </li>

    };
};

//=============================================================
//=============================================================
//=============================================================
//this code toggles the date search option



function validateDate(){
  var start = $("#startDate").val();
  var end = $("#endDate").val();
  if(start == ""){
    alert("Please fill in a start date.")
    return false;
  }else if(end == ""){
    alert("Please fill in an end date.")
    return false;
  }
  return true;
}


})
