
// link up api routes for voting

// ajax post for faux to both routes with unique id identifier

// document

console.log("horsey");


  $(document).on("click", "#fauxButton", function() {
    event.preventDefault();
    //var id = $(this).data("id");
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
    console.log("---------------------");
    console.log("fake vote worked");
    console.log("---------------------");

    // Send the PUT request.
    // $.ajax("/api/vote", {
    //   type: "POST",
    //   data: fakeVote
    // }).then(
    //   function() {
    //     console.log("updated with fake vote");
    //     // Reload the page to get the updated list
    //     location.reload();
    //   }
    // );
  });

  $(document).on("click", "#realButton", function() {
    //event.preventDefault();
    //var id = $(this).data("id");
    // var vote = true;
    // var source = $(this).data("source");
    // var articleURL = $(this).data("article-url");
    // var articleTitle = $(this).data("article-title");
    //
    // var realVote = {
    //   faux: false,
    //   real: vote,
    //   source: source,
    //   articleURL: articleURL,
    //   articleTitle: articleTitle
    // }
    console.log("---------------------");
    console.log("real vote worked");
    console.log("---------------------");

    // Send the PUT request.
    // $.ajax("/api/vote", {
    //   type: "POST",
    //   data: realVote
    // }).then(
    //   function() {
    //     console.log("updated with fake vote");
    //     // Reload the page to get the updated list
    //     location.reload();
    //   }
    // );
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
