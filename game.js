

var game =[];
var colors = ["green","red","yellow","blue"];
var up =[];

var started= false;
var level = 0;

$(document).keydown(function(){
  if(!started){
    $("#level-title").text("Level "+level);
    nxt();
    started=true;
  }

});


$(".btn").click(function(){
  var uc= $(this).attr("id");
  up.push(uc);

  press(uc);

  play(uc);

  check(up.length-1);
});

function check(clevel){

  if (game[clevel]===up[clevel]){
    console.log("sucess");

    if(up.length===game.length){

      setTimeout(function(){
        nxt();
      },1000);
    }
  } else {
    var c= "wrong";
    play(c);
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    $("h1").text("Game Over,Press any key to restart");
    start();
  }
}

function start(){
  level = 0;
  game = [];
  started= false;
}

function nxt(){

  up=[];

  level++;
  $("#level-title").text("Level "+ level);

  var r = Math.floor(4*Math.random());

var rc = colors[r];
game.push(rc);

$("#"+rc).fadeIn(100).fadeOut(100).fadeIn(100);
play(rc);


}

function play(name){
  var audio1 = new Audio ("sounds/"+name+".mp3");
  audio1.play();
}

function press(cc){
  $("."+cc).addClass("pressed");
  setTimeout(function(){
    $("."+cc).removeClass("pressed");
  },100);
}
