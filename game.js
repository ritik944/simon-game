var userclickedpattern=[]
var buttoncolors=["red","blue","green","yellow"];
var gamepattern=[]; 


console.log("linked");
var started=false;
var level=0;

function statover(){
    level=0;
    gamepattern=[];
    started=false;
}

$(document).keypress(function(){
    if(!started){
    $("#level-title").text("level "+level);
    nextsequence();
    started=true;
    }
});

$(".btn").click(function(){
    var userchosencolour=$(this).attr("id");
    userclickedpattern.push(userchosencolour);
    checkanswer(userclickedpattern.length-1);
    // console.log(userclickedpattern);
    playsound(userchosencolour);
    animatepress(userchosencolour);
});

function checkanswer(curentlevel){
    if(userclickedpattern[curentlevel]===gamepattern[curentlevel]){
        console.log("sucess");
        if(userclickedpattern.length===gamepattern.length)
        {
            setTimeout(function(){
                nextsequence()
            },1000);
        }

    }

    else
    {
        console.log("wrong");
        playsound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("h1").text("Game Over, Press Any Key to Restart");
        statover();
    }
}


function nextsequence()
{
    userclickedpattern=[];
    level++;
    $("#level-title").text("level "+level);

    var randomno=Math.floor(Math.random()*4);
    var randomchosencolor=buttoncolors[randomno];
    gamepattern.push(randomchosencolor);

    $("#"+randomchosencolor).fadeIn(100).fadeOut(100).fadeIn(100);

    playsound(randomchosencolor);
    


}


function playsound(name){

    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();

}


function animatepress(currentcolor){
    $("#"+currentcolor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentcolor).removeClass("pressed");
    },50);

}

