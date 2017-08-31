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
