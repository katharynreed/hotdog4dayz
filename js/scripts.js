var tracker = 1;
var score;

function Player(name, score) {
  this.name = name;
  this.score = score;
};


  Player.prototype.accrue = function() {
    if (tracker >= 5) {
      if (this.score >= 2) {
        $("p#end-positive-show").show();
      } else if (this.score < 2 && this.score >= 0) {
        $("p#end-neutral-show").show();
      } else if (this.score < 0) {
        $("p#end-negative-show").show();
      }
  };
};


//user interface logic
$(document).ready(function() {
  //this fires when ANY answer is clicked
  score = 0;

  $("div[class^='answers']").click(function(event) {
    event.preventDefault();
    var approvalRating = $(event.target).attr('data-name');
    var answerShow = this.id + "-show";
    var questionSelector = window[approvalRating];
    console.log(approvalRating);
    if (approvalRating === "frame" + tracker + "-positive") {
      score += 1;

      console.log(score);
    } else if (approvalRating === "frame" + tracker + "-negative") {
      score -= 1;

    }
    console.log(score);
    // console.log(answerShow);
    // console.log(this.id);
    $("#" + answerShow).show();
    $("#" + answerShow).fadeOut(5000);
    $(".frame"+tracker+"-answers").hide();
    // console.log(tracker);
    tracker += 1;
    // console.log(tracker);
    $(".frame"+tracker+"-answers").show();
  });
  var newPlayer = new Player(name, score);
  var playerScore = newPlayer.accrue();
});
