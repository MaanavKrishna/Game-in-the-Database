class Game{
    constructor(){
      
    }
    update(stat){
     database.ref('/').update({
         gamestate:stat
     })
    }

    Getgamestate(){
        console.log(123);
        database.ref('gamestate').on("value",function (data) {
            gamestate=data.val();
        })
    }
    Start(){
      if(gamestate===0)
      {
        player=new Player();
        player.Getcount();
        form=new Form();
        form.display();
      }
    }
    play()
    {
      form.hide();
      text("Game Is Starting",200,150);
      Player.getplayerinfo();
      if(allplayers!=undefined)
      {
        var xposition=10;
        for(var plr in allplayers)
        {
          xposition=xposition+60;
          text(allplayers[plr].name,xposition,20);
        }
      }
    }
}
