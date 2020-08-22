var ball,ball1,database,position,playercount=0,player,form,game,allplayers;
var gamestate=0;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    game=new Game();
    game.Getgamestate();
    game.Start();
}

function draw(){
     if(playercount===4)
     {
         game.update(1);
     }
     if(gamestate===1)
     {
         game.play();
     }
}

function changePosition(x,y){
    ball1.x = ball1.x + x;
    ball1.y = ball1.y + y;
}

function writeposition(x,y)
{
    database.ref('ball/position').set({x:ball1.x+x,y:ball1.y+y});
    console.log("hi")
}