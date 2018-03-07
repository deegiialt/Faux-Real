$(document).ready(function() {
  var start = $("#start")
  var setup = $("#setup")
  var settings = {};

  setup.hide();

  $(start).on("click", function() {

    start.hide();
    setup.show();

  });

  $("submitSettings").on("click", function() {
    event.preventDefault();

    var name = $("#name").val().trim();
    var color = $("#color");
    var numPlayers = $("#numPlayers");
    var computerPlayers = numPlayers--;

    console.log(name);

    settings = {
      userName: name,
      userColor: color,
      computerCount: computerPlayers
    }

    console.log(settings);

    $.post("/api/settings", settings)
      .then(function(data) {
        console.log(data);
        console.log("Settings Stored Successfully!");
      });
  })







});
