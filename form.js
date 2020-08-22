class Form{
    constructor(){
      this.title=createElement('h2');
      this.input=createInput("name");
      this.button=createButton("Play");
    }
    display(){
      this.title.html("car race");
      this.title.position(150,0);
      this.input.position(150,160);
      this.button.position(150,200);
      
      this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
          playercount++;
          player.name=this.input.value();
          player.index=playercount;
          player.UpdatePlayer();
          player.Updatecount(playercount);
      })
    }
    hide()
    {
      this.title.hide();
      this.input.hide();
      this.button.hide();
    }
}