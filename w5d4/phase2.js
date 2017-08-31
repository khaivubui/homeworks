function Elephant(name, height, tricksArr) {
  this.name = name;
  this.height = height;
  this.tricksArr = tricksArr;
}

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
};

Elephant.prototype.grow = function() {
  this.height += 12;
};

Elephant.prototype.addTrick = function(trick) {
  this.tricksArr.push(trick);
};

Elephant.prototype.play = function(trick) {
  let index = Math.round(Math.random() * (this.tricksArr.length - 1));
  console.log(`${this.name} is ${this.tricksArr[index]}`);
};

let ellie = new Elephant("Ellie", 185, [
  "giving human friends a ride",
  "playing hide and seek"
]);
let charlie = new Elephant("Charlie", 200, [
  "painting pictures",
  "spraying water for a slip and slide"
]);
let kate = new Elephant("Kate", 234, [
  "writing letters",
  "stealing peanuts"
]);
let micah = new Elephant("Micah", 143, [
  "trotting",
  "playing tic tac toe",
  "doing elephant ballet"
]);

let herd = [ellie, charlie, kate, micah];

let paradeHelper = (elephant) => {
  console.log(`${elephant.name} is trotting by!`);
};

herd.forEach(paradeHelper);
