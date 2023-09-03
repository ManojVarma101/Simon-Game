var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

var userClickedPattern = [];


var i = 0;
var level = 0;
$("body").on("keypress", function(){
    i = i+1
    if(i === 1 ){
        nextSequence();
    }
});     

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
              nextSequence();
            }, 1000);
        }
    }
    else{
        playsound("wrong");
        $("h1").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(function(){$("body").removeClass("game-over");},200);
        startover();
    }
}

function startover(){
    level = 0;
    gamepattern=[];
    i = 0;
}







function nextSequence(){
    userClickedPattern=[];
    level = level+1;
    $("h1").text("Level "+ level);
    n = Math.floor(Math.random()*4);
    var randomChoosenColour = buttonColours[n];
    gamePattern.push(randomChoosenColour);
    animatePress(randomChoosenColour);
    playsound(randomChoosenColour);
    
}



$(".btn").click(function(){

    var userChoosenColour = this.id;
    userClickedPattern.push(userChoosenColour);
    
    playsound(userChoosenColour);
    animatePress(userChoosenColour);
    var l = userClickedPattern.length-1;
    checkAnswer(l)
})

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){ $("#"+currentColour).removeClass("pressed");},100);
}


function playsound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
    /*switch(name){
        case "red": var r = new Audio("sounds/red.mp3");
                    r.play();
        case "green":var g = new Audio("sounds/green.mp3");
                     g.play();
        case "blue": var b = new Audio("sounds/blue.mp3");
                     b.play();
        case "yellow": var y = new Audio("sounds/yellow.mp3");
                      y.play();
        case "wrong":var w = new Audio("sounds/wrong.mp3");
                     w.play();
    }*/

}
