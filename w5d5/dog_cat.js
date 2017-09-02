const Cat = function Cat () {
  this.name = 'Markov';
  this.age = 3;
};

const Dog = function Dog () {
  this.name = 'Noodles';
  this.age = 4;
};

Dog.prototype.chase = function (cat) {
  console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`);
};

const Markov = new Cat ();
const Noodles = new Dog ();
