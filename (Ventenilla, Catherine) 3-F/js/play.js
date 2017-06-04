playGame = {

		create: function(){
		game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
		game.scale.forceLandscape = true;
		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;
		game.scale.setScreenSize =true;
		
				bg3= game.add.image(0,0,"bg1");
				bg3.scale.x=2.8;
				bg3.scale.y=3.5;

				platform = game.add.sprite(0,599,"platform");
				platform.scale.x = 2;
  
				girl = game.add.sprite(400,300,"girl");
			    player = game.add.sprite(100,h/2,"mychar");
			    girl.scale.x=.5;
				girl.scale.y=.5;
				player.scale.x=1.5;
				player.scale.y=1.5;

			    player.animations.add('walk-right',[24,25,26],11,true);
			    player.animations.add('walk-left',[12,13,14],11, true);
		





				labelScore = game.add.text(50, 20, 'Score:0', {font: '30px serif', fill: 'red'}); 
				labelhi = game.add.text(600, 20, "Hi-Score: " +this.getScore(),{font: '30px serif', fill: 'red'}); 
				gameOverText = game.add.text(w/2-100,h/2,"",{fill:'black'});
				button_Left = game.add.button(0,400,"btn2",this.goLeft);
				button_Right = game.add.button(680,400,"btn1",this.goRight);
			    button_Galaw = game.add.button(630,60,"btn-reset",this.playAgain);

				bgmusic = game.add.audio("bgmusic");
				bgmusic.loop = true;
				bgmusic.play()
				
				game.physics.arcade.enable(platform);
				platform.body.immovable=true;
				platform.scale.x = 2;
				platform.scale.y = .1;

				

	
				this.pauseButton = this.game.add.sprite(20,60, 'pauseButton');
				this.pauseButton.inputEnabled = true;
				this.pauseButton.fixedToCamera = true;
				this.pauseButton.events.onInputUp.add(function () {this.game.paused = true;},this);
				this.game.input.onDown.add(function () {if(this.game.paused)this.game.paused = false;},this); 
				
						
			    game.physics.arcade.enable(player);
				player.body.collideWorldBounds = true;
				player.checkWorldBounds = true;
				player.body.gravity.y = 10000;
				player.body.bounce.y=0.7;
//				player.anchor.set(1,1);


		game.physics.arcade.enable(girl);
        girl.body.setCircle = 50;
        girl.body.gravity.x = 0;
        girl.body.gravity.y = 30;
        girl.body.bounce.x = 0.9;
        girl.body.bounce.y = 0.9;
        girl.body.collideWorldBounds = true;

//girl.body.gravity.y = 100;
				girl.checkWorldBounds = true;
				girl.body.bounce.setTo(1);
				girl.body.collideWorldBounds = true;
				girl.enableBody = true;
				girl.anchor.set(2);
				girl.body.velocity.set(200, -300);

				
				

				game.physics.enable(player, Phaser.Physics.ARCADE);
				
				//this.time (1000, 10);
		},
		

			 update:function() {
				game.physics.arcade.collide(player,girl);
				game.physics.arcade.collide(player,platform);
		//		game.physics.arcade.overlap(girl,enemy, this.killGirl);
				game.physics.arcade.collide(platform, girl, this.killGirl);
				game.physics.arcade.collide(player, girl, this.bounceGirl);
					
	

		

			/*		
			
					
					
			if(keyboard.left.isDown){
					player.body.velocity.x = -500;
					player.animations.play("walk-left");

				}
				else if(keyboard.right.isDown){
					player.body.velocity.x = 500;
					player.animations.play("walk-right");

				}
				else if(keyboard.up.isDown){
					player.body.velocity.y = -500;
				}
				else if(keyboard.down.isDown){
					player.body.velocity.y = 500;
				}
				else{
					player.body.velocity.x = 0;
					player.body.velocity.y = 0;
					player.animations.stop();
					}

				*/	
		},




enemyMoveDown:function () {
    
        enemy.body.velocity.y = -400;
        enemy.animations.play('down');

     },
enemyMoveUp:function () {
    
        enemy.body.velocity.y =400;
        enemy.animations.play('up');

     },

enemy1MoveDown:function () {
    
        enemy1.body.velocity.y = -400;
        enemy1.animations.play('down');

     },
enemy1MoveUp:function () {
    
        enemy1.body.velocity.y =400;
        enemy1.animations.play('up');

     },
		
		
killGirl:function (platform,enemy){
	girl.kill();
	
	//game._paused = true;
   gameOverText.text = "GAME OVER!\nYour Score: "+score;

	//game._paused= true;

		},

		
loopAudio: function(time){
		setInterval(function(){
				bgmusic.play();
			
			
		}, time);
       
      },


 saveScore:function(score){
    localStorage.setItem("gameData",score);
	},
	
	getScore:function(){
    return (localStorage.getItem("gameData") == null || localStorage.getItem("gameData") == "")?0:
    localStorage.getItem("gameData");

//var x = 0;
},
time:function  (time,duration){
	setInterval (function(){
	if(duration<=0){

    gameOverText.text = "GAME OVER!\nYour Score: "+score;

	game._paused= true;
	//killmychar();
	}
	else{
	duration--;
	timeText.text= "TIME: " +duration;
	}
	}, time)
	},

//var score=0;	
bounceGirl:function (mychar,girl){
    score = score + 5;
    labelScore.text = "Score: "+score;
	girl.body.bounce.set(1);

	
     //if(this.retrieve()<=score){
       //         this.saveScore(score);        
            //}
        },
		

goRight:function (){

        player.animations.play('walk-right');
        player.body.velocity.x = 400;

		button_Right.frame = 0;

    setTimeout(function(){
       button_Right.frame = 1;

    },100);


		
},

goLeft:function (){
        player.animations.play('walk-left');
        player.body.velocity.x = -400;
			
		button_Left.frame = 0;

    setTimeout(function(){
        button_Left.frame = 1;

    },100);

},
 saveScore:function(score){
            localStorage.setItem("saveScore",score);
        },  
        retrieve:function(){
            var data = localStorage.getItem("saveScore");
            if(data == null || data == ""){
                data = 0;
            }
            return data;
        },
playAgain:function (){

   
    window.location.href=window.location.href;


    button_Galaw.frame = 1;

    setTimeout(function(){
        button_Galaw.frame = 0;
         },100);
    }
}


