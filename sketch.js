const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var starImg,bgImg;
var star, starBody;
var fairy, fairyAnim;
var fairyVoice;
function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starryNight.jpg");
	fairyAnim = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3")
}

function setup() {
	var canvas = createCanvas(800, 500);

	fairyVoice.play();

	fairy = createSprite(200, 350, 10, 10);
	fairy.addAnimation("fairy", fairyAnim);
	fairy.setAnimation("fairy");
	fairy.scale = 0.2;

	star = createSprite(650,30, 10, 10);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);
  if (keyDown(LEFT_ARROW)) {
	fairy.velocityX = -5;
}
else if (keyDown(RIGHT_ARROW)) {
	fairy.velocityX = 5;
}
  else {
	  fairy.velocityX = 0;
  }
  if (star.y > 320 && starBody.position.y > 320) {
	  Matter.Body.setStatic(starBody, true);
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW && fairy.x > 530 && fairy.x < 560) {
		Matter.Body.setStatic(starBody,false); 
	}
}
