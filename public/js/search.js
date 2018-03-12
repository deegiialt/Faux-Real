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
          return renderSearchResults(response.articles, "Search");
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
          return renderSearchResults(response.articles, "Search");
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


function renderArticles(searchResponse, category){


      //rendering the modal for the tiles
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
      newDiv.append(link);
      //inside anchor tag
      var tileContent = $("<div>");
      tileContent.addClass("tileContent");  
      tileContent.addClass("tile" + i);
      newDiv.append(tileContent);


      //inside tilecontent
      tileContent.append("<p class='tileTitle' style='font-size:100%;overflow:visible;display:block !important'>" + searchResponse[i].title + "</p>");

      var tileDetails = $("<div>");
      tileDetails.attr("class", "tileDetails");      
      tileDetails.append("<p class='tileSource' style='font-size:50%'>" + searchResponse[i].source.name + "</p>");
      // tileContent.append("<p class='tileSource'>" + searchResponse[i].publishedAt + "</p><br>");



      var buttonReal = $("<button style='margin:10px'>");
      buttonReal.addClass("btn voteButton glyphicon glyphicon-ok");
      buttonReal.attr("data-source", searchResponse[i].source.name);
      buttonReal.attr("data-title", searchResponse[i].title);
      buttonReal.attr("data-url", searchResponse[i].url);
      buttonReal.attr("data-id", "real-" + searchResponse[i].url);
      var buttonFaux = $("<button>");
      buttonFaux.addClass("btn voteButton glyphicon glyphicon-remove");
      buttonFaux.attr("data-source", searchResponse[i].source.name);
      buttonFaux.attr("data-title", searchResponse[i].title);
      buttonFaux.attr("data-url", searchResponse[i].url);
      buttonFaux.attr("data-id", "faux-" + searchResponse[i].url);
      tileContent.append(buttonReal);

      if (searchResponse[i].urlToImage === null) {
      tileDetails.append("<img class='tileImage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhtrVBUxp2hTkZEGWzqxkT-mC0p5MFaiqsIVV5As2qO4M_U2XgiQ' width='120px' height='120px'>");
      } else {

      tileDetails.append("<img class='tileImage' src='" + searchResponse[i].urlToImage + "' width='120px' height='120px' >");

      }

      tileContent.append(buttonFaux);


      tileDetails.append('<br><div class="voteContainer"><div class="notFakeVote">0%</div></div>')
      // var voteContain = $("div");
      // voteContain.addClass("voteContainer");
      // tileContent.append(voteContain);
      // //inside voteContainer
      // var scale = $("div");
      // scale.addClass("notFakeVote");
      // voteContain.append(scale);

      tileContent.append(tileDetails)

      $(".panel").empty();
      $(".panel").append('<h1 class="text-center">' + category + '</h1>');
      $(".panel").append(newPanel);
    };
    return;

  }


  function renderSearchResults(searchResponse, category){

      var newPanel = $("<div>");
      newPanel.attr("class", "main");
      
      for(var i = 0; i < searchResponse.length; i++){

      var newDiv = $("<div>");
      newDiv.attr("class", "well")
      newPanel.append(newDiv);
      var upperDiv = $("<div>");
      upperDiv.append("<h3>" + searchResponse[i].title + "</h3>");
      upperDiv.append("<h4>" + searchResponse[i].source.name + "</h4>");
      newDiv.append(upperDiv);
      var lowerDiv = $("<div>");
      lowerDiv.append("<p>" + searchResponse[i].description + "</p>");
      lowerDiv.append("<p>" + searchResponse[i].url + "</p>");
      newDiv.append(lowerDiv);

      var buttonReal = $("<button style='margin:10px'>");
      buttonReal.addClass("btn voteButton glyphicon glyphicon-ok");
      buttonReal.attr("data-source", searchResponse[i].source.name);
      buttonReal.attr("data-title", searchResponse[i].title);
      buttonReal.attr("data-url", searchResponse[i].url);
      buttonReal.attr("data-id", "real-" + searchResponse[i].url);
      var buttonFaux = $("<button>");
      buttonFaux.addClass("btn voteButton glyphicon glyphicon-remove");
      buttonFaux.attr("data-source", searchResponse[i].source.name);
      buttonFaux.attr("data-title", searchResponse[i].title);
      buttonFaux.attr("data-url", searchResponse[i].url);
      buttonFaux.attr("data-id", "faux-" + searchResponse[i].url);
      lowerDiv.append('<br><div class="voteContainer"><div class="notFakeVote">70%</div></div>');
      lowerDiv.append(buttonReal);
      lowerDiv.append(buttonFaux);

      }
      $(".panel").empty();
      $(".panel").append('<h1 class="text-center">' + category + '</h1>');
      $(".panel").append(newPanel);

  }



  var url;

  console.log("TEST");
    $('body').on ("click", ".button", function(){
        console.log("id two on click")
        var url = $(this).find("a").attr("href");
        var buttonId = $(this).attr('id');
        console.log(url)


        $.ajax({
          url: "/checkiframe",
          method: "POST",
          data: {
            url: url
          }
          }).then(function(response){
            console.log("=======================================================================")
            console.log(response);
            if (response === "true") {
              $("#myFrame").attr("src", url);
              $('#modal-container').removeAttr('class').addClass(buttonId);
              $('body').addClass('modal-active');

            } else {
              alert("Error");
              var errorDiv = $("<div>");
            }
          
          
          }).fail(function(err) {
            console.error(err);
          });
        
    })

    $('div').on("click", "div#modal-container", function(){
          url = "";
          $(this).addClass('out');
          $('body').removeClass('modal-active');
    });

      //newPanel.append('<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a><a class="right carousel-control" href="#myCarousel" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>');

    // var iframe = document.getElementById("myFrame");
    // var elmnt = iframe.contentWindow.document.getElementsByTagName("H1")[0];
    // elmnt.style.display = "none";
  
  // function validateArticle(url, buttonId){
  //     var url = url;
  //     var buttonId = buttonId;
  //       $.ajax({
  //         url: url,
  //         method: "GET",
  //         }).then(function(response){
  //           console.log("=======================================================================")
  //         console.log(response);



  //         $("#myFrame").attr("src", url);
  //         $('#modal-container').removeAttr('class').addClass(buttonId);
  //         $('body').addClass('modal-active');
          
  //         });


  // }


//=======
      // $(".panel").empty();
      // $(".panel").append('<h1 class="text-center">' + category + '</h1>');
      // $(".panel").append(newPanel);

//IN USE FOR DATABASE. PLEASE DON'T DELETE
//       var fauxNewButton = $("<button>Faux</button>");
//       var realNewButton = $("<button>Real</button>");
//       fauxNewButton.attr("type", "submit");
//       //fauxNewButton.attr("id", "faux" + i);
//       fauxNewButton.addClass("fauxButton");
//       fauxNewButton.attr("data-source", searchResponse[i].source.name);
//       fauxNewButton.attr("data-title", searchResponse[i].title);
//       fauxNewButton.attr("data-url", searchResponse[i].url);
//       fauxNewButton.attr("data-id", "faux-" + searchResponse[i].url);
//       fauxNewButton.attr("data-date", searchResponse[i].publishedAt);
//       realNewButton.addClass("realButton");
//       realNewButton.attr("data-source", searchResponse[i].source.name);
//       realNewButton.attr("data-title", searchResponse[i].title);
//       realNewButton.attr("data-url", searchResponse[i].url);
//       realNewButton.attr("data-date", searchResponse[i].publishedAt);
//       realNewButton.attr("data-id", "real-" + searchResponse[i].url);


//       newPanel.append(fauxNewButton);
//       newPanel.append(realNewButton);

//       $("#div-section").append(newPanel);


//>>>>>>> c39d76481343a299113ce795bfa8f936904bccfc

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








