//business logic


function Player() {
  this.score = 0;
  this.roll;
}

Player.prototype.rollDie = function() {
  this.roll = Math.floor((Math.random() * 6) + 1);
};







//front end logic

$(document).ready(function(){
  var player1 = new Player();
  var player2 = new Player();
  $("#p1Score").text(player1.score);
  $("#p2Score").text(player2.score);

  $("dl#p1roll").click(function(event){
    event.preventDefault();
    player1.rollDie();
    $(".p1roll").text(player1.roll);





    });
});
