//Create variables here
var database;
var dog, happyDog,foodS, foodStock;

function preload()
{
  //load images here
  this.image = loadImage("images/doglmg.png");
  this.image = loadImage("images/doglmg1");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(250,250,40,40);

  foodStock = database.ref('food');
  foodStock.on = ("value", readStock);

}


function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  text("Note: Press Up Arrow Key to Feed Drago Milk!")
  textSize(35);
  fill("white");
  stroke();


  drawSprites();
  //add styles here
}

function readStock(data){
  food=data.val();
}

function writeStock(x){

if(x<=0){
  x=0;
}else{
  x=x-1;
}

  database.ref('/').update({
    Food:x
  })

}



