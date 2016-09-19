var Animal = function (age) {
  this.age = age;
};
Animal.prototype.sleep = function() {
  console.log("Zzzzzzz");
};
Animal.prototype.eat = function() {
  console.log("Num num num");
};

function Atack(){
	console.log("POW!")
}

function Dolphin(age) {
	Animal.call(this,age)
  this.swim = function(){
 	 	console.log("Splash!");
  }
}
function Lion(age) {
	Animal.call(this,age)
  this.roar = function(){
 	 	console.log("Rahhhh!");
  }
  this.atack = Atack;
}
function Eagle(age) {
	Animal.call(this,age)
  this.atack = Atack;
  this.fly = function(){
  	console.log("whoo Hooo!")
  }
}
function Bee(age) {
	Animal.call(this,age)
  this.fly = function(){
  	console.log("Whoo Hooo!")
  }
}
Dolphin.prototype = Object.create(Animal.prototype)
Dolphin.prototype.constructor = Dolphin;

Lion.prototype = Object.create(Animal.prototype)
Lion.prototype.constructor = Lion;

Eagle.prototype = Object.create(Animal.prototype)
Eagle.prototype.constructor = Eagle;

Bee.prototype = Object.create(Animal.prototype)
Bee.prototype.constructor = Bee;

