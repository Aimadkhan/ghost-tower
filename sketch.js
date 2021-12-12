var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload() {
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300, 300);
  tower.addImage("tower", towerImg);
  tower.velocityY = 1;

  ghost = createSprite(300, 300)
  ghost.addImage("ghost", ghostImg)
  ghost.scale = 0.3

  climber_group=new Group()
door_group=new Group()
invisibleBlock_group=new Group()

}

function draw() {
  background(200);

  if (tower.y > 400) {
    tower.y = 300
  }
  if (keyDown("space")) {
    ghost.velocityY = -12
  }

  ghost.velocityY = ghost.velocityY + 0.5
  if (keyDown("left_arrow")) { ghost.x = ghost.x - 3; }
  if (keyDown("right_arrow")) {
    ghost.x = ghost.x + 3;
  }
 // if(climbersGroup.isTouching(ghost)){ ghost.velocityY = 0; } 
 // if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){ ghost.destroy(); gameState = "end" }
  
 // ghost.collide=(climber_group)
  spawnDoor()
  drawSprites()
}
function spawnDoor() {
  if (frameCount % 100 === 0) {
    door = createSprite(200, -50)
    door.addImage("door", doorImg)
    door.velocityY = 1
    door.x = Math.round(random(100, 400))

    climber = createSprite(door.x, 10)
    climber.addImage("climber", climberImg)
    climber.velocityY = 1 

    ghost.depth=door.depth
    ghost.depth=ghost.depth+1
    
    door.lifetime=800
    climber.lifetime=800

    climber_group.add(climber)
    door_group.add(door)

    invisibleBlock = createSprite(door.x, 40 ,10)
   
 invisibleBlock.velocityY = 1 
invisibleBlock.debug=true
invisibleBlock_group.add(invisibleBlock)
invisibleBlock.visible=false
  }




}