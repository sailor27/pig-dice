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
    console.log(player1.roll);
      if (player1.roll === 1){
        $(".p1roll").text("bust!");
        $("dl#p1roll").hide();
        $("#p2roll").show();
      } else {
        player1.score = (player1.score + player1.roll);
        $("#p1Score").text(player1.score);
        $(".p1roll").text(player1.roll);
        //second click
        $("dl#p1roll").click(function(event){
          event.preventDefault();
          player1.rollDie();

          //$("#p1Score").text(player1.score);
          });
      }





    //



  /*  $("dl#p2roll").click(function(event){
      event.preventDefault();
      player2.rollDie();
      $(".p2roll").text(player2.roll);

    });*/



    });
});
