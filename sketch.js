const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var player, plat, fplat, gro;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);
	

	engine = Engine.create();
	world = engine.world;
	
	player = new Player(300, 300, 95, 95)
	player.debug = true
	gro = new Ground(300,400,3000,10)
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 600,
		  height: 600,
		  wireframes: false
		}
	  });
	Engine.run(engine);
  
}


function draw() {
	console.log(player.body.position.y)
if (camera.position.x + width / 2 > gro.body.position.x + gro.body.width / 2) {
	gro.body.position.x = camera.position.x;
}
  camera.position.x = player.body.position.x
  rectMode(CENTER);
  background(23);
  player.display();
  gro.display();
  drawSprites();
  player.debug = true
  if(player.body.speed > 40){
	  player.body.speed = 0
  }
  //if(player.body.position.y < 338){
	//player.body.position.y = player.body.position.y + 1
 // }

}



function keyPressed(){

	if(keyCode === UP_ARROW && player.body.position.y > 258){
		Matter.Body.applyForce(player.body,player.body.position,{x:0,y:-300});
		//player.body.position.y = player.body.position.y - 10
		
	}

	if(keyCode === LEFT_ARROW && player.body.speed < 30){
		Matter.Body.applyForce(player.body,player.body.position,{x:-450,y:0});
	}

	if(keyCode === RIGHT_ARROW && player.body.speed < 30){
		Matter.Body.applyForce(player.body,player.body.position,{x:450,y:0});
	}
}