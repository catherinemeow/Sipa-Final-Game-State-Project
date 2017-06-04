preloadGame = {
	
	preload: function(){
				game.load.image('enemy', 'img/dead.png');
				game.load.image('enemy1', 'img/cat.png');

				game.load.image("bg1","img/bground.jpg");
				game.load.image("platform","img/platform3.png");
				game.load.image("girl","img/sipa.png");
				game.load.spritesheet("mychar","img/1char.png",32,32);
				game.load.spritesheet('btn-reset','img/restartbtn.png',100,50);
				game.load.spritesheet("btn2","img/rightarrow.png",100,100);
				game.load.spritesheet("btn1","img/leftarrow.png",100,100);
				game.load.spritesheet("pauseButton","img/pausebtn.png",158,44);
				game.load.image("buttonplay","img/play.png",800,800);
				game.load.audio('bgmusic','sounds/opening.ogg');
			    game.load.image('bg2','img/sipa1.jpg');
			    game.load.image("buttonabout","img/about3.png");
				game.load.image('about2','img/tels.png');
				game.load.image("menu2","img/back3.png");

				
				},
	create: function(){
		game.state.start("playGame");
		game.state.start("menuGame");
		
		
	}
	
	
}