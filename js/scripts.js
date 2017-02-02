var tracker = 1;
var score;

function Player(name, score) {
  this.name = name;
  this.score = score;
};


  Player.prototype.accrue = function(score) {
    $("#blink").delay(7000).fadeIn(4000);
    if (score < 0) {
      $("p#end-negative-show").delay(7000).fadeIn(4000);
      $("#name-display3").text(newPlayer.name);
      $(".footer").delay(7000).fadeIn(4000)
    } else if (score < 2 && score >= 0) {
      $("p#end-neutral-show").delay(7000).fadeIn(4000);
      $("#name-display2").text(newPlayer.name);
      $(".footer").delay(7000).fadeIn(4000)
    } else {
      $("p#end-positive-show").delay(7000).fadeIn(4000);
      $("#name-display1").text(newPlayer.name);
      $(".footer").delay(7000).fadeIn(4000)
    }
  };

var newPlayer = new Player(name, score);

//user interface logic
$(document).ready(function() {
  //this fires when ANY answer is clicked
  score = 0;

  $("#song-1").get(0).play();

  $("#form-name").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input#name").val();
    console.log(inputtedName);
    $("#form-name").hide();
    $("#logo").hide();
    $("#song-1").get(0).pause();
    $("#song-2").get(0).play();

    newPlayer.name = inputtedName;
    $("#form-name").hide();
    $("#hot-dog-gif").show();
    $(".choice-box").show();
  });

  $("div[class^='answers']").click(function(event) {
    event.preventDefault();
    var approvalRating = $(event.target).attr('data-name');
    var answerShow = this.id + "-show";
    var questionSelector = window[approvalRating];
    if (approvalRating === "frame" + tracker + "-positive") {
      score += 1;
    } else if (approvalRating === "frame" + tracker + "-negative") {
      score -= 1;
    }
    $("#" + answerShow).show();

    $("#" + answerShow).fadeOut(7000);

    $(".frame"+tracker+"-answers").hide();
    tracker += 1;
    $(".frame"+tracker+"-answers").show();

    if (tracker >= 8) {
      var playerScore = newPlayer.accrue(score);
      $("#hot-dog-gif").fadeOut(4000);
      $(".choice-box").hide();
      $("#restart").delay(7000).fadeIn(4000);
      $("#song-2").get(0).pause();
      $("#song-3").get(0).play();
    }
  });
});
