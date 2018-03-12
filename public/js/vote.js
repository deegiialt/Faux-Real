
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
      console.log(fakeVoteTotal);

      $.post("/api/uservote", fakeVote)
        // On success, run the following code
        .then(function(data) {
          // Log the data we found
          //console.log("sending to user's individual vote database");
          //console.log(data);
        });

      $.post("/api/totalvote", fakeVoteTotal)
        // On success, run the following code
        .then(function(data) {
          // Log the data we found
          //console.log("sending to count database");
          //console.log(data);
        });
    });


// ajax post for real votes to both routes with unique id identifier

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
        faux: vote,
        real: false,
        source: source,
        articleURL: articleURL,
        articleTitle: articleTitle,
        datePublished: datePublished
      }
      console.log(fakeVoteTotal);
      $.post("/api/uservote", realVote)
        // On success, run the following code
        .then(function(data) {
          // Log the data we found
          console.log("sending to user's individual vote database - real");
          console.log(data);
        });

      $.post("/api/totalvote", realVoteTotal)
        // On success, run the following code
        .then(function(data) {
          // Log the data we found
          console.log("sending to count database - real");
          console.log(data);
        });
    });

  $(document).ready(function() {
    console.log("works");
    $.get("/login", function(data){
      console.log("works");
    }).then(function(data) {
      // Log the data we found
      // console.log("sending to database");
      console.log(data);
    })

    // $.get("/api/posts" + authorId, function(data) {
    //   console.log("Posts", data);
    //   posts = data;
    //   if (!posts || !posts.length) {
    //     displayEmpty(author);
    //   }
    //   else {
    //     initializeRows();
    //   }
    // });

  });

//console.log("vote page loads");

    //setup a get with a count where articleURL matches to provide count of all fake and real votes


    //setup get route to push new values to the page
