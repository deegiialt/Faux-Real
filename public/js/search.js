console.log("here");

$(document).ready(function(){

    searchTopHeadlines();

  $("#trending").on("click", function(){
      // $("#gridContainer").empty();
      searchTopHeadlines();
  })

  $("#search-submit").on("click", function(){
        // $("#gridContainer").empty();
        var start = $("#startDate").val();
        var end = $("#endDate").val();
        var keyword = $(".form-control").val().trim();

        if($('#all').is(':checked')){
          if(start!= "" || end!=""){
            var check = validateDate();
            if(check == false) return;

                return searchKeywordDate(keyword, start, end);

            }else{

                searchKeyword(keyword, start, end);
              }

        } else if($('#cnn').is(':checked')){
            if(start!= "" || end!=""){
              var check = validateDate();
              if(check == false) return;

                  return searchCNNDate(keyword, start, end);

            }   else{

                searchCNN(keyword, start, end);
            }
        } else if($('#the-wall-street-journal').is(':checked')){
            if(start!= "" || end!=""){
              var check = validateDate();
              if(check == false) return;

                return searchWallStreetDate(keyword, start, end);

          }   else{

              searchWallStreet(keyword, start, end);
          }
        }else if($('#the-huffington-post').is(':checked')){
          if(start!= "" || end!=""){
            var check = validateDate();
            if(check == false) return;

                return searchHuffPostDate(keyword, start, end);

          }else{

              searchHuffPost(keyword, start, end);
          }
        }else if($('#vice-news').is(':checked')){
          if(start!= "" || end!=""){
            var check = validateDate();
            if(check == false) return;

                return searchViceDate(keyword, start, end);

          }else{

              searchVice(keyword, start, end);
          }
        }else if($('#usa-today').is(':checked')){
          if(start!= "" || end!=""){
            var check = validateDate();
            if(check == false) return;

                return searchUSADate(keyword, start, end);

          }else{

              searchUSA(keyword, start, end);
          }
        }else if($('#google-news').is(':checked')){
          if(start!= "" || end!=""){
            var check = validateDate();
            if(check == false) return;

                return searchGoogleDate(keyword, start, end);

          }else{

              searchGoogle(keyword, start, end);
          }
        }else if($('#buzzfeed').is(':checked')){
          if(start!= "" || end!=""){
            var check = validateDate();
            if(check == false) return;

                return searchBuzzfeedDate(keyword, start, end);

          }else{

              searchBuzzfeed(keyword, start, end);
          }
        };
      $(".form-control").val("")

  });

  $("#business").on("click", function(){
        // $("#gridContainer").empty();
        searchBusiness();
  });

  $("#sports").on("click", function(){
        // $("#gridContainer").empty();
        searchSports();
  })

  $("#entertainment").on("click", function(){
        // $("#gridContainer").empty();
        searchEntertainment();
  })

  $("#technology").on("click", function(){
        // $("#gridContainer").empty();
        searchTech();
  })


  //=========================================================================================================
  //=========================================================================================================
  //=========================================================================================================
  //the next 8 functions are for the search option menu

  //ALL seach bar function
  function searchKeywordDate(keyword, start, end){
    var url = 'https://newsapi.org/v2/everything?' +
                'q=' + keyword + '&' +
                'language=en&' +
                'sortBy=publishedAt&' +
                'sortBy=relevancy&' +
                'sortBy=popularity&' +
                'from=' + start + '&' +
                'to=' + end + '&' +
                'apiKey=b8438b744ce24b42a60f3a56367a00c4';

    var url = url;
        $.ajax({
          url: url,
          method: "GET",

        }).then(function(response){
          console.log(response);
          return renderArticles(response.articles, "Search");
        });
  }

  function searchKeyword(keyword, start, end){
      var url = 'https://newsapi.org/v2/everything?' +
                      'q=' + keyword + '&' +
                      'language=en&' +
                      'sortBy=publishedAt&' +
                      'sortBy=relevancy&' +
                      'sortBy=popularity&' +
                      'apiKey=b8438b744ce24b42a60f3a56367a00c4';
      var url = url;
        $.ajax({
          url: url,
          method: "GET",

        }).then(function(response){
          console.log(response);
          return renderArticles(response.articles, "Search");
        });
  }

  function searchCNNDate(keyword, start, end){
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

        $.ajax({
          url: url,
          method: "GET",

        }).then(function(response){
          console.log(response);
          return renderArticles(response.articles, "Search CNN");
        });
  }

  function searchCNN(keyword, start, end){
      var url = 'https://newsapi.org/v2/everything?' +
                  'q=' + keyword + '&' +
                  'sources=cnn&' +
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
          return renderArticles(response.articles, "Search CNN");
        });
  }

  function searchWallStreetDate(keyword, start, end){
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

        $.ajax({
          url: url,
          method: "GET",

        }).then(function(response){
          console.log(response);
          return renderArticles(response.articles, "Search Wall Street Journal");
        });
  }

  function searchWallStreet(keyword, start, end){
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
          return renderArticles(response.articles, "Search Wall Street Journal");
        });
  }

  function searchHuffPostDate(keyword, start, end){
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

        $.ajax({
          url: url,
          method: "GET",

        }).then(function(response){
          console.log(response);
          return renderArticles(response.articles, "Search Huffington Post");
        });
  }

  function searchHuffPost(keyword, start, end){
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
          return renderArticles(response.articles, "Search Huffington Post");
        });
  }

  function searchViceDate(keyword, start, end){
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

        $.ajax({
          url: url,
          method: "GET",

        }).then(function(response){
          console.log(response);
          return renderArticles(response.articles, "Search Vice News");
        });
  }

  function searchVice(keyword, start, end){
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
          return renderArticles(response.articles, "Search Vice News");
        });
  }

  function searchUSADate(keyword, start, end){
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

        $.ajax({
          url: url,
          method: "GET",

        }).then(function(response){
          console.log(response);
          return renderArticles(response.articles, "Search USA Today");
        });
  }

  function searchUSA(keyword, start, end){
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
          return renderArticles(response.articles, "Search USA Today");
        });
  }

  function searchGoogleDate(keyword, start, end){
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

        $.ajax({
          url: url,
          method: "GET",

        }).then(function(response){
          console.log(response);
          return renderArticles(response.articles, "Search Google News");
        });
  }

  function searchGoogle(keyword, start, end){
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
          return renderArticles(response.articles, "Search Google News");
        });
  }

  function searchBuzzfeedDate(keyword, start, end){
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

        $.ajax({
          url: url,
          method: "GET",

        }).then(function(response){
          console.log(response);
          return renderArticles(response.articles, "Search Buzzfeed News");
        });
  }

  function searchBuzzfeed(keyword, start, end){
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
          return renderArticles(response.articles, "Search Buzzfeed News");
        });
  }

  //===================================================================================================
  //===================================================================================================
  //===================================================================================================
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
          return renderArticles(response.articles, "Trending");
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
          return renderArticles(response.articles, "Business");
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
          renderArticles(response.articles, "Sports");
          modalButtons(response.articles);

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
          return renderArticles(response.articles, "Entertainment");
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
          return renderArticles(response.articles, "Technology");
        });
  }

//========================================================================================
//========================================================================================
//========================================================================================
//this function will render all other search functions
var modal = $("<div>");
var url;
var buttonReal = $("<button style='margin:10px' id='real-button' data-source='' data-title='' data-url='' data-date=''>");
var buttonFaux = $("<button style='margin:10px' id='faux-button' data-source='' data-title='' data-url='' data-date=''>");

function renderArticles(searchResponse, category){
    //rendering the modal for the tiles

      var body = $(".putinmodal");

        // var modalContainer = $("<div>");
        // modalContainer.attr("id", "modal-container");
        // body.append(modalContainer);

        // var background = $("<div>");
        // background.addClass("modal-background");
        // modalContainer.append(background);

        // var modal = $("<div>");
        // modal.addClass("modal");
        // modal.addClass("modal-test");
        // modal.append("<iframe id='myFrame' src='' style='height:500px;width:900px'></iframe>")

        // var buttonDiv = $("<div>");
        // buttonDiv.addClass("button-div");
        // // buttonDiv.append(buttonReal);
        // // buttonDiv.append(buttonFaux);
        // modal.append(buttonDiv);
        // background.append(modal);


      var modalContainer = $("<div>");
      modalContainer.attr("id", "modal-container");
      body.append(modalContainer);

      var background = $("<div>");
      background.addClass("modal-background");
      modalContainer.append(background);

      var modal = $("<div>");
      modal.addClass("modal");

      modal.append("<iframe id='myFrame' src='' style='height:500px;width:900px'></iframe>")
      modal.append('<br><div class="voteContainer"><div class="notFakeVote">0%</div></div>')
      background.append(modal);

      var articleDiv = $("<div>");
      articleDiv.attr("id", "articleDiv");
      articleDiv.append("<iframe id='myFrame' src='' style='height:500px;width:900px'></iframe>")
      modal.append(articleDiv);

      var errorDiv = $("<div>");
      errorDiv.attr("class", "errorDiv")
      errorDiv.append("<h3>Page Unable to Render</h3>");
      errorDiv.append("<p>We are sorry, this page is unable to display here.  Please click the link below to be taken to the article's site.</p>");
      errorDiv.append("<a class='erorLink' href='" + url + "''>Go to Article</button>");
      modal.append(errorDiv)

      //this starts the tile rendering
      //================================================
      //================================================

      var newPanel = $("<div>");
      newPanel.attr("class", "main");
      var newPanelList = $("<ul>");
      newPanelList.attr("id", "og-grid");
      newPanelList.attr("class", "og-grid");
      newPanel.append(newPanelList);

    for(var i = 0; i < searchResponse.length; i++){

      var listItemOne = $("<li>")
      newPanelList.append(listItemOne);

      //inside list item
      var newDiv = $("<div>");
      newDiv.attr("id", "two");
      newDiv.addClass("button");
      listItemOne.append(newDiv)
      //inside "two" div
      var link = $("<a>");
      link.attr("id", "urlSource")
      link.attr("href", searchResponse[i].url);
      link.attr("data-source", searchResponse[i].source.name);
      link.attr("data-title", searchResponse[i].title);
      link.attr("data-url", searchResponse[i].url);
      link.attr("data-date", searchResponse[i].publishedAt);
      link.attr("data-faux", "faux-" + searchResponse[i].url);
      link.attr("data-real", "real-" + searchResponse[i].url);
      newDiv.append(link);
      //inside anchor tag
      var tileContent = $("<div>");
      tileContent.addClass("tileContent");
      tileContent.addClass("tile" + i);
      newDiv.append(tileContent);


      //inside tilecontent

      tileContent.append("<p class='tileTitle' style='font-size:110%;overflow:visible;display:block !important'>" + searchResponse[i].title + "</p>");

      var tileDetails = $("<div>");

      tileDetails.attr("class", "tileDetails");
      tileDetails.append("<p class='tileSource' style='font-size:75%'>" + searchResponse[i].source.name + "</p>");
      // tileContent.append("<p class='tileSource'>" + searchResponse[i].publishedAt + "</p><br>");

      // tileContent.append("<p class='tileSource'>" + searchResponse[i].publishedAt + "</p><br>");

      // var buttonReal = $("<button style='margin:10px'>");
      // buttonReal.addClass("btn voteButton realButton glyphicon glyphicon-ok");
      // buttonReal.attr("data-source", searchResponse[i].source.name);
      // buttonReal.attr("data-title", searchResponse[i].title);
      // buttonReal.attr("data-url", searchResponse[i].url);
      // buttonReal.attr("data-date", searchResponse[i].publishedAt);
      // buttonReal.attr("data-id", "real-" + searchResponse[i].url);
      //
      // var buttonFaux = $("<button>");
      // buttonFaux.addClass("btn voteButton fauxButton glyphicon glyphicon-remove");
      // buttonFaux.attr("data-source", searchResponse[i].source.name);
      // buttonFaux.attr("data-title", searchResponse[i].title);
      // buttonFaux.attr("data-url", searchResponse[i].url);
      // buttonFaux.attr("data-date", searchResponse[i].publishedAt);
      // buttonFaux.attr("data-id", "faux-" + searchResponse[i].url);


      if (searchResponse[i].urlToImage === null) {
      tileDetails.append("<img class='tileImage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhtrVBUxp2hTkZEGWzqxkT-mC0p5MFaiqsIVV5As2qO4M_U2XgiQ' width='150px' height='150px'>");
      } else {

      tileDetails.append("<img class='tileImage' src='" + searchResponse[i].urlToImage + "' width='150px' height='150px' >");

      }


      // tileDetails.append('<br><div class="voteContainer"><div class="notFakeVote">0%</div></div>')

      // var voteContain = $("div");
      // voteContain.addClass("voteContainer");
      // tileContent.append(voteContain);
      // //inside voteContainer
      // var scale = $("div");
      // scale.addClass("notFakeVote");
      // voteContain.append(scale);

      tileContent.append(tileDetails);

      $(".panel").empty();
      $(".panel").append('<h1 class="text-center">' + category + '</h1>');
      $(".panel").append(newPanel);
    };
    return;

  }

    $('body').on("click", ".button", function(event){
        //console.log("id two on click")
          var modal = $(".modal-test");


  function renderSearchResults(searchResponse, category){

      var body = $(".putinmodal");

      var modalContainer = $("<div>");
      modalContainer.attr("id", "modal-container");
      body.append(modalContainer);

      var background = $("<div>");
      background.addClass("modal-background");
      modalContainer.append(background);

      var modal = $("<div>");
      modal.addClass("modal");
      modal.append("<iframe id='myFrame' src='' style='height:500px;width:900px'></iframe>")
      background.append(modal);

      var articleDiv = $("<div>");
      articleDiv.attr("id", "articleDiv");
      articleDiv.append("<iframe id='myFrame' src='' style='height:500px;width:900px'></iframe>")
      modal.append(articleDiv);

      var errorDiv = $("<div>");
      errorDiv.attr("class", "errorDiv")
      errorDiv.append("<h3>Page Unable to Render</h3>");
      errorDiv.append("<p>We are sorry, this page is unable to display here.  Please click the link below to be taken to the article's site.</p>");
      errorDiv.append("<a class='erorLink' href='" + url + "''>Go to Article</button>");
      modal.append(errorDiv)

      //this starts the tile rendering
      //====================================
      //====================================
      var newPanel = $("<div>");
      newPanel.attr("class", "main");

      for(var i = 0; i < searchResponse.length; i++){

      var newDiv = $("<div>");
      newDiv.attr("class", "well")
      newDiv.attr("id", "two");
      newDiv.addClass("button");
      //newDiv.addClass("button");
      var link = $("<a>");
      link.attr("id", "urlSource")
      link.attr("href", searchResponse[i].url);
      newDiv.append(link);
      newPanel.append(newDiv);
      var upperDiv = $("<div>");
      upperDiv.append("<h3>" + searchResponse[i].title + "</h3>");
      upperDiv.append("<h4>" + searchResponse[i].source.name + "</h4>");
      newDiv.append(upperDiv);
      var lowerDiv = $("<div>");
      //lowerDiv.addClass("search")
      lowerDiv.append("<p>" + searchResponse[i].description + "</p>");
      newDiv.append(lowerDiv);

//       var buttonReal = $("<button style='margin:10px'>");
//       buttonReal.addClass("btn voteButton glyphicon glyphicon-ok");
//       buttonReal.attr("data-source", searchResponse[i].source.name);
//       buttonReal.attr("data-title", searchResponse[i].title);
//       buttonReal.attr("data-url", searchResponse[i].url);
//       buttonReal.attr("data-id", "real-" + searchResponse[i].url);
//       var buttonFaux = $("<button>");
//       buttonFaux.addClass("btn voteButton glyphicon glyphicon-remove");
//       buttonFaux.attr("data-source", searchResponse[i].source.name);
//       buttonFaux.attr("data-title", searchResponse[i].title);
//       buttonFaux.attr("data-url", searchResponse[i].url);
//       buttonFaux.attr("data-id", "faux-" + searchResponse[i].url);
//       lowerDiv.append('<br><div class="voteContainer"><div class="notFakeVote">70%</div></div>');
//       lowerDiv.append(buttonReal);
//       lowerDiv.append(buttonFaux);

      }
      $(".panel").empty();
      $(".panel").append('<h1 class="text-center">' + category + '</h1>');
      $(".panel").append(newPanel);

  }



  var url;
  var errorDiv = $("<div>");

  console.log("TEST");
    $('body').on ("click", ".button", function(){

        console.log("id two on click")
          var url = $(this).find("a").attr("href");
          var source = $(this).find("a").attr("data-source");
          var title = $(this).find("a").attr("data-title");
          var url = $(this).find("a").attr("data-url");
          var date = $(this).find("a").attr("data-date");
          var faux = $(this).find("a").attr("data-faux");
          var real = $(this).find("a").attr("data-real");

          //console.log(source);
          var buttonId = $(this).attr('id');

          modal.append();
          //appending attributes to each of the button ids
          $("#real-button").attr("data-source", source);
          $("#real-button").attr("data-title", title);
          $("#real-button").attr("data-url", url);
          $("#real-button").attr("data-date", date);
          $("#real-button").attr("data-faux", faux);

          //appending attributes to each of the button ids
          $("#faux-button").attr("data-source", source);
          $("#faux-button").attr("data-title", title);
          $("#faux-button").attr("data-url", url);
          $("#faux-button").attr("data-date", date);
          $("#faux-button").attr("data-faux", faux);

        console.log(url)
        // $("#errorDiv").hide();
        // $("#articleDiv").hide();


        $.ajax({
          url: "/checkiframe",
          method: "POST",
          data: {
            url: url
          }
          }).then(function(response){
            console.log("inside of .then")
            console.log(response);
            if (response === "true") {
              $(".errorDiv").hide();
              $("#articleDiv").show();
              console.log("inside true conditional")

              $("#myFrame").attr("src", url);
              $('#modal-container').removeAttr('class').addClass(buttonId);
              $('body').addClass('modal-active');

            } else {

              console.log("inside false conditional");
              $("#articleDiv").hide();
              $(".errorDiv").show();

              $(".errorDiv").find("a").attr("href", url)

              $('#modal-container').removeAttr('class').addClass(buttonId);
              $('body').addClass('modal-active');
            }

          })

    })

          //console.log(url);
    });

    $('div').on("click", "div#modal-container", function(event){
          url = "";
          // event.stopPropagation();
          // var msg = "";
          // if ( event.isPropagationStopped() ) {
          //   msg = "called";
          //   alert(msg);
          // } else {
          //   msg = "not called";
          //   alert(msg);
          // }

          $(this).addClass('out');
          $('body').removeClass('modal-active');
          //$(".modal").clear();
          //errorDiv.empty();
    });

    // var iframe = document.getElementById("myFrame");
    // var elmnt = iframe.contentWindow.document.getElementsByTagName("H1")[0];
    // elmnt.style.display = "none";

      //newPanel.append('<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a><a class="right carousel-control" href="#myCarousel" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>');

    // var iframe = document.getElementById("myFrame");
    // var elmnt = iframe.contentWindow.document.getElementsByTagName("H1")[0];
    // elmnt.style.display = "none";


//=======
      // $(".panel").empty();
      // $(".panel").append('<h1 class="text-center">' + category + '</h1>');
      // $(".panel").append(newPanel);

//================================================================================================
//================================================================================================
//================================================================================================
//this code toggles the date search option



  function validateDate(){
    var start = $("#startDate").val();
    var end = $("#endDate").val();
    if(start == ""){
      alert("Please fill in a start date.")
      return false;
    } else if(end == ""){
      alert("Please fill in an end date.")
      return false;
    }
  };

});
