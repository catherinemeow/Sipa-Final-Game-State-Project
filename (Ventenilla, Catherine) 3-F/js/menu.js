menuGame = {
		create: function(){


			bg = game.add.image(0,0,"bg2");
			bg.scale.y = 2.7;
			bg.scale.x = 3.7;

			startButton = game.add.button(game.width/2.4,game.height/3.4, 'buttonplay', this.buttonPlay);
			startButton.scale.x=  .2;
			startButton.scale.y = .2;

			aboutButton = game.add.button(game.width/1.9,game.height/1.5, 'buttonabout', this.about);
			aboutButton.anchor.set(0.6)
			aboutButton.scale.x=.3;
			aboutButton.scale.y = .3;

			headText=  game.add.text(game.width/2-300,game.height/30,"The Filipino Traditional Game",{fill:'black',align: "center"});
			headText.scale.x=1.6;
			headText.scale.y=1.9;

		},
		update: function(){

},

			buttonPlay:function(){

				game.state.start("playGame");
			},
		
		about: function(){
            about=game.add.image(0,0,"about2");
          	 about.scale.y = 1;
			 about.scale.x = 1;
		
			
            restartButton=game.add.button(0,5,"menu2",restartB,this);
            function restartB() {
           
            restartButton.destroy();
            game.state.start("menuGame");
            }

            },


                ins: function(){
            about=game.add.image(0,0,"ins");
            about.scale.set(3.2);
			

            restartButton=game.add.button(0,5,"menu2",restartB,this);
            function restartB() {
            restartButton.destroy();

            game.state.start("menuGame");

            }

            },



}




	
