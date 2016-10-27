//business logic


function Player() {
  this.score = 0;
  this.roll;
  this.turn = 0;
}

Player.prototype.rollDie = function() {
  this.roll = Math.floor((Math.random() * 6) + 1);
};

/*Player.prototype.addUp = function() {
  this.turn = (player1.score + player.roll);
}*/

Player.prototype.isWinner = function() {
  if (this.score >= 100) {
   return true;
  } else {
   return false;
  }
};


//front end logic


//when the document is ready, two player objects are created, each with a score of 0.
//this score is printed in the score area of each player.

$(document).ready(function(){
  var player1 = new Player();
  var player2 = new Player();
  $("#p1Score").text(player1.score);
  $("#p2Score").text(player2.score);

//when user clicks on "roll" in player 1's side of screen, a number between 1 and 6
//is returned and becomes the roll in the player object.

  $("dl#p1roll").click(function(event){
    event.preventDefault();
    if (player1.isWinner() === true){
      $("#p1winner").show();
    } else {
      player1.rollDie();
        if (player1.roll === 1){
          $(".p1roll").text("bust!");
          $("dl#p1roll").hide();
          $("#p2roll").show();
          $("dl#p1hold").hide();

        } else {
          player1.turn = (player1.turn + player1.roll);
          $("#p1Score").text(player1.score);
          $(".p1roll").text(player1.roll);
          $("dl#p1hold").show();

            $("dl#p1hold").click(function(event){
              event.preventDefault();
              player1.score = (player1.score + player1.turn);
              console.log(player1);
              $("#p1Score").text(player1.score);
              $("dl#p1roll").hide();
              $("#p2roll").show();
            });
        }
      }
    });

///////////////////////////////////////////////////////////////////
   $("dl#p2roll").click(function(event){
    event.preventDefault();
    if (player2.isWinner() === true){
      $("#p2winner").show();
    } else {
      $(".p2roll").text("");
      player2.rollDie();

        if (player2.roll === 1){
          $(".p2roll").text("bust!");
          $("dl#p2roll").hide();
          $("#p1roll").show();
          $("dl#p2hold").hide();
        } else {
          player2.turn = (player2.turn + player2.roll);
          $("#p2Score").text(player2.score);
          $(".p2roll").text(player2.roll);
          $("dl#p2hold").show();

            $("dl#p2hold").click(function(event){
              event.preventDefault();
              player2.score = (player2.score + player2.turn);
              console.log(player2);
              $("#p2Score").text(player2.score);
              $("dl#p2roll").hide();
              $("#p1roll").show();
            });
        }
      }
  });


});
