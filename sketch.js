var dog , happyDog , database;
var foodS , foodStock;

function preload(){
	dog = loadImage("Dog.png");
	happyDog = loadImage("happydog.png");
}
function setup(){
	createCanavas(500,500);
	database = firebase.database()
	var dog = createSprite(250,250,50,50);
	foodStock = database.ref('Food');
	foodStock.on("value",readStock);
}
function draw(){
	background(46,139,87)
	if(keyWentDown(UP_ARROW)){
		writeStock(foods);
		dog.addImage(dogHappy);
	}
	drawSprites()
}
function readStock(data){
	foodS = data.val();
}
function writeStock(x){
	database.ref('/').update({
		Food:x
	})
}