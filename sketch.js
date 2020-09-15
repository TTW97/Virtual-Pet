
var dog, dogimg, happyDog, database, foodS, foodStock;

function preload()
{
  dogimg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(200,200,20,20);
  dog.addImage(dogimg);
  dog.scale = 0.2;

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() {  

  background(46,139,87);

  drawSprites();
  

  if(keyWentDown(UP_ARROW)){

    writeStock(foodS);
    dog.addImage(happyDog);

  }

  stroke("black");
  text("Food Remaining: " + foodS,100,100);

}

function readStock(data) {

  foodS = data.val();

}

function writeStock(x) {

  if (x <= 0) {

    x=0;

  }

  else {

    x = x - 1;

  }

  database.ref('/').update({

    Food: x

  })

}




