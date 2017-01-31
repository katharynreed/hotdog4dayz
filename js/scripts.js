//business logic

function Player(name, score) {
  this.name = name;
  this.score = 0;
}

Player.prototype.accrue = function(points) {
  this.score += points;
}


var tracker = 1;
$(document).ready(function() {
  //this fires when ANY answer is clicked
  $("div[class^='answers']").click(function(event) {
    event.preventDefault();
    var approvalRating = $(event.target).attr('data-name');
    var answerShow = this.id + "-show";
    var questionSelector = window[approvalRating];
    console.log(approvalRating);
    console.log(answerShow);
    console.log(this.id);
    $("#" + answerShow).show();
    $(".frame"+tracker+"-answers").hide();
    console.log(tracker);
    tracker += 1;
    console.log(tracker);
    $(".frame"+tracker+"-answers").show();


  });

  var 
  var user = newPlayer(name, score)
});
