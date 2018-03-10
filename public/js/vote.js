
  // link up api routes for voting

  // ajax post for faux to both routes with unique id identifier


  console.log("vote page loads");

  $(document).on("click", ".fauxButton",function() {
      var id = $(this).data("id");
      var vote = true;
      var source = $(this).data("source");
      var articleURL = $(this).data("url");
      var articleTitle = $(this).data("title");
  // include id: id for unique identifier
      var fakeVote = {
        faux: vote,
        real: false,
        source: source,
        articleURL: articleURL,
        articleTitle: articleTitle
      }
      console.log(fakeVote);

      $.post("/api/uservote", fakeVote)
        // On success, run the following code
        .then(function(data) {
          // Log the data we found
          console.log("sending to database");
          console.log(data);
        });

      $.post("/api/uservote", fakeVote)
        // On success, run the following code
        .then(function(data) {
          // Log the data we found
          console.log("sending to database");
          console.log(data);
        });
    });

    $(document).on("click", ".realButton",function() {
      var id = $(this).data("id");
      var vote = true;
      var source = $(this).data("source");
      var articleURL = $(this).data("url");
      var articleTitle = $(this).data("title");
  // include id: id for unique identifier
      var realVote = {
        faux: false,
        real: vote,
        source: source,
        articleURL: articleURL,
        articleTitle: articleTitle
      }
      console.log(realVote);

      $.post("/api/uservote", realVote)
        // On success, run the following code
        .then(function(data) {
          // Log the data we found
          console.log("sending to database");
          console.log(data);
        });

      $.post("/api/uservote", realVote)
        // On success, run the following code
        .then(function(data) {
          // Log the data we found
          console.log("sending to database");
          console.log(data);
        });
    });

  // ajax post for real to both routes with unique id identifier

    // $(".realButton").on("click", function(event) {
    //   event.preventDefault();
    //
    //  var id = $(this).data("id");
    // var vote = true;
    // var source = $(this).data("source");
    // var articleURL = $(this).data("article-url");
    // var articleTitle = $(this).data("article-title");
    //
    // var fakeVote = {
    //   faux: vote,
    //   real: false,
    //   source: source,
    //   articleURL: articleURL,
    //   articleTitle: articleTitle
    // }
    //   // Send the PUT request.
    //   $.ajax("/api/burgers/" + id, {
    //     type: "PUT",
    //     data: eat
    //   }).then(
    //     function() {
    //       console.log("burger devoured .. handlebar");
    //       console.log("changed devoured to", eat);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });

    //setup get route to push new values to the page
