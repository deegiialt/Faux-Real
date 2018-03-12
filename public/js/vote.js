
$(document).ready(function() {

  var realArr = [];
  var fauxArr = [];

// ajax post for faux to both routes with unique id identifier
  $(document).on("click", ".fauxButton",function() {

        var id = $(this).data("id");
        var vote = true;
        var source = $(this).data("source");
        var articleURL = $(this).data("url");
        var articleTitle = $(this).data("title");
        var datePublished = $(this).data("date");

    // include id: id for unique identifier
        var fakeVote = {
          userName: "Test",
          faux: vote,
          real: false,
          source: source,
          articleURL: articleURL,
          articleTitle: articleTitle
        }
        var fakeVoteTotal = {
          faux: vote,
          real: false,
          source: source,
          articleURL: articleURL,
          articleTitle: articleTitle,
          datePublished: datePublished
        }

        //console.log(fakeVoteTotal);

  //_____________________________________________________
  //posts a users vote to their respective account
        $.post("/api/uservote", fakeVote)
          // On success, run the following code
          .then(function(data) {
            // Log the data we found
            //console.log("sending to user's individual vote database");
            //console.log(data);
          });

  //_____________________________________________________
  //posts the vote to a general database respective account
        $.post("/api/totalvote", fakeVoteTotal)
          // On success, run the following code
          .then(function(data) {
            // Log the data we found
            //console.log("sending to count database");
            //console.log(data);
          });

  //_____________________________________________________
  //setup a get with a count where articleURL matches to provide count of all fake and real votes
          var showtotal = articleTitle;

          $.ajax({
            method: "GET",
            url: "/api/count/" + showtotal
          })
          .then(function(getVotes) {
            //console.log(getVotes.rows);
            for(var i = 0; i < getVotes.rows.length; i++) {
              //console.log(getVotes.rows[i].faux);
              var fauxTrue = getVotes.rows[i].faux;
              fauxTrue += getVotes.rows[i].faux;
              if(fauxTrue) {
                fauxArr.push(getVotes.rows[i].faux);
                console.log("______________________________________________");
                console.log(fauxArr);
                console.log(fauxArr.length);
              }
            }
          });


  });





  //___________________________________________________________________
  // ajax post for real votes to both routes with unique id identifier
  //___________________________________________________________________

  function realVote(cb) {
    $(document).on("click", ".realButton",function() {
        var id = $(this).data("id");
        var vote = true;
        var source = $(this).data("source");
        var articleURL = $(this).data("url");
        var articleTitle = $(this).data("title");
        var datePublished = $(this).data("date");

    // include id: id for unique identifier
        var realVote = {
          faux: false,
          real: vote,
          source: source,
          articleURL: articleURL,
          articleTitle: articleTitle
        }
        var realVoteTotal = {
          faux: false,
          real: vote,
          source: source,
          articleURL: articleURL,
          articleTitle: articleTitle,
          datePublished: datePublished
        }
  //______________________________________________
  //posts a users vote to their respective account

        $.post("/api/uservote", realVote)
          // On success, run the following code
          .then(function(data) {
            // Log the data we found
            // console.log("sending to user's individual vote database - real");
            // console.log(data);
          });

  //_____________________________________________________
  //posts the vote to a general database respective account

        $.post("/api/totalvote", realVoteTotal)
          // On success, run the following code
          .then(function(data) {
            // Log the data we found
            // console.log("sending to count database - real");
            // console.log(data);
          });

  //_____________________________________________________
  //setup a get with a count where articleURL matches to provide count of all fake and real votes
          var showtotal = articleTitle;

          $.ajax({
            method: "GET",
            url: "/api/count/" + showtotal
          })
          .then(function(getVotes) {
            //console.log(getVotes);
              for(var i = 0; i < getVotes.rows.length; i++) {
                //console.log(getVotes.rows[i].faux);
                var realTrue = getVotes.rows[i].faux;
                realTrue += getVotes.rows[i].faux;
                if(realTrue) {
                  realArr.push(getVotes.rows[i].faux);
                  console.log("______________________________________________");
                  console.log(realArr);
                  console.log(realArr.length);
                }
              }
          });

    });

    cb();
  }





  //___________________________________________________________________
  //setup get route to push new values to the page
  //___________________________________________________________________

  // function loadTiles() {
  //   $(".tileContent").on("load", function() {
  //     console.log("panel is loading and works");
  //   })
  //
  // }

  realVote();


});
