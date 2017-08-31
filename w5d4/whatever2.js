let titleize = (arr, callback) => {
  arr = arr.map(name => `Mx. ${name} Jingleheimer Schmidt`);
  callback(arr);
};

let printCallback = (arr) => {
  arr.forEach(el => console.log(el));
};
