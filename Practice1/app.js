// Qs1. will return true or false
let checkArray = function (input) {
  return Array.isArray(input);
};
console.log(checkArray(1, 2));
console.log(checkArray([1, 2, 3, 4]));

// Qs1. 2nd Solution :will return true or false
let check = function (arr) {
  return arr instanceof Array;
};
console.log(check([1, 2, 3]));
console.log(check("Mohit Kucheriya"));

// Qs2. Using spread operator
function cloning(inp) {
  let cloned = [...inp];
  return cloned;
}
console.log(cloning([10, 11, 12, 13]));
console.log(cloning([10, 11, [12, 13]]));

// Qs3. Using default parameter
function getter(inp, n = 1) {
  var get = [];
  for (let i = 0; i < n; i++) {
    get.push(inp[i]);
  }
  return get;
}
console.log(getter([1, 2, 3, 4, 5], 4));

// Qs4.Using join() method
function color(col) {
  return col.join("+");
}

console.log(color(["red", "pink", "blue", "green", "violet"]));

// Q5. possible way to create object :
var obj1 = {}; //1st
let obj2 = Object.create(null); //2nd

function abcd() {
  this.name = "Mohit";
}
let obj3 = new abcd(); //3rd

// Qs6. Higher order function
function xyz(inp1) {
  return function (inp2) {
    return inp1 + inp2;
  };
}
console.log(xyz(10)(20));

// Qs7.
// var
function es5() {
  if (true) {
    var a = 10;
  }
  console.log(a);
}
es5();

// let
function es6() {
  if (true) {
    let b = 10;
  }
  console.log(b);
}
es6();
