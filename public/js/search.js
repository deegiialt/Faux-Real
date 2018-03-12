console.log("here");

  $(document).ready(function(){


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
            var check = validateDate(keyword);
            if(check == false) return;

                return searchKeywordDate(keyword);

            }else{
      
                searchKeyword(keyword);
              }

        } else if($('#cnn').is(':checked')){
            if(start!= "" || end!=""){
              var check = validateDate();
              if(check == false) return;

                  return searchCNNDate(keyword);

            }   else{
                
                searchCNN(keyword);
            }
        } else if($('#the-wall-street-journal').is(':checked')){
            if(start!= "" || end!=""){
              var check = validateDate();
              if(check == false) return;

                return searchWallStreetDate(keyword);

          }   else{
              
              searchWallStreet(keyword);
          }
        }else if($('#the-huffington-post').is(':checked')){
          if(start!= "" || end!=""){
            var check = validateDate();
            if(check == false) return;

                return searchHuffPostDate(keyword);

          }else{
              
              searchHuffPost(keyword);
          }
        }else if($('#vice-news').is(':checked')){
          if(start!= "" || end!=""){
            var check = validateDate();
            if(check == false) return;
              
                return searchViceDate(keyword);

          }else{
              
              searchVice(keyword);
          }
        }else if($('#usa-today').is(':checked')){
          if(start!= "" || end!=""){
            var check = validateDate();
            if(check == false) return;

                return searchUSADate(keyword);

          }else{
              
              searchUSA(keyword);
          }
        }else if($('#google-news').is(':checked')){
          if(start!= "" || end!=""){
            var check = validateDate();
            if(check == false) return;

                return searchGoogleDate(keyword);

          }else{
              
              searchGoogle(keyword);
          }
        }else if($('#buzzfeed').is(':checked')){
          if(start!= "" || end!=""){
            var check = validateDate();
            if(check == false) return;

                return searchBuzzfeed(keyword);

          }else{

              searchBuzzfeed(keyword);
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
  function searchKeywordDate(keyword){
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
          return renderArticles(response.articles);
        });
  }

  function searchKeyword(keyword){
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
          return renderArticles(response.articles);
        });
  }

  function searchCNNDate(keyword){
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
          return renderArticles(response.articles);
        });
  }

  function searchCNN(keyword){
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
          return renderArticles(response.articles);
        });
  }

  function searchWallStreetDate(keyword){
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
          return renderArticles(response.articles);
        });
  }

  function searchWallStreet(keyword){
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

  function searchHuffPostDate(keyword){
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
          return renderArticles(response.articles);
        });
  }

  function searchHuffPost(keyword){
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

  function searchViceDate(){
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
          return renderArticles(response.articles);
        });
  }

  function searchVice(){
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

  function searchUSADate(keyword){
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
          return renderArticles(response.articles);
        });
  }

  function searchUSA(keyword){
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

  function searchGoogleDate(keyword){
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
          return renderArticles(response.articles);
        });
  }

  function searchGoogle(keyword){
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

  function searchBuzzfeedDate(keyword){
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
          return renderArticles(response.articles);
        });
  }

  function searchBuzzfeed(keyword){
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

  //===========================================================================================
  //===========================================================================================
  //===========================================================================================
  //this function will render all other search functions

  // function renderArticles(searchResponse){

  //     for(var i = 0; i < searchResponse.length; i++){

  //       var newPanel = $("<div>");
  //       newPanel.attr("class", "headBodyPanel")
  //       var newPanelHeading = $("<div>");
  //       newPanelHeading.attr("class", "panel-heading")
  //       newPanelHeading.attr("id", "articleHead-" + i)
  //       newPanelHeading.append("<h3>" + searchResponse[i].source.name + "</h3>");
  //       newPanelHeading.append("<h4>" + searchResponse[i].author + "</h4>");
  //       var newPanelBody = $("<div>");
  //       newPanelBody.attr("class", "panel-body")
  //       newPanelBody.attr("id", "articleBody-" + i);
  //       newPanelBody.append("<p>" + searchResponse[i].description + "</p>");
  //       newPanelBody.append("<a href=" + "'" + searchResponse[i].url + "'" + "target='_blank'" + ">" + "Go to Article" + "</a>");
  //       var fauxNewButton = $("<button>Faux</button>");
  //       var realNewButton = $("<button>Real</button>");
  //       fauxNewButton.attr("type", "submit");
  //       //fauxNewButton.attr("id", "faux" + i);
  //       fauxNewButton.addClass("fauxButton");
  //       fauxNewButton.attr("data-id", i);
  //       //fauxNewButton.attr("data-id", "faux-" + searchResponse[i].url);
  //       realNewButton.addClass("realButton");
  //       //realNewButton.attr("data-id", "real-" + searchResponse[i].url);



  //       newPanel.append(newPanelHeading);
  //       newPanel.append(newPanelBody);
  //       newPanel.append(fauxNewButton);
  //       newPanel.append(realNewButton);

  //       $("#gridContainer").append(newPanel);



  //     };
  // };

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



//========================================================
//========================================================
//========================================================
//this function will render all other search functions


function renderArticles(searchResponse){


      var newPanel = $("<div>");
      newPanel.attr("class", "main");
      var newPanelList = $("<ul>");
      newPanelList.attr("id", "og-grid");
      newPanelList.attr("class", "og-grid");
      newPanel.append(newPanelList);
      

    for(var i = 0; i < searchResponse.length; i++){

      //var articleDate = searchResponse[i].publishedAt

      var listItemOne = $("<li>")
      newPanelList.append(listItemOne);
      //inside list item
      var newDiv = $("<div>");
      newDiv.attr("id", "two");
      newDiv.addClass("button");
      listItemOne.append(newDiv)
      //inside "two" div
      var link = $("<a>");
      link.attr("href", searchResponse[i].url);
      link.append(link);
      //inside anchor tag
      var tileContent = $("<div>");
      tileContent.addClass("tileContent");  
      tileContent.addClass("tile" + i);
      newDiv.append(tileContent);
      //inside tilecontent
      tileContent.append("<p class='tileTitle'>" + searchResponse[i].title + "</p>");
      tileContent.append("<p class='tileSource'>" + searchResponse[i].source.name + "</p>");
      tileContent.append("<p class='tileSource'>" + searchResponse[i].publishedAt + "</p>");
      tileContent.append("<button class= 'btn voteButton glyphicon glyphicon-ok'></button>");
      tileContent.append("<button class= 'btn voteButton glyphicon glyphicon-remove'></button>");
      // var voteContain = $("div");
      // voteContain.addClass("voteContainer");
      // tileContent.append(voteContain);
      // //inside voteContainer
      // var scale = $("div");
      // scale.addClass("notFakeVote");
      // voteContain.append(scale);
      $(".panel").empty();
      $(".panel").append(newPanel);
    };
};

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