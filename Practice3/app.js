// slice & splice 
// slice :  gives a portion of array, original array remains same. 
// slice are immutable i.e unchangeable

// splice : operation performed on array and remove that elements from the original array.
// splice are mutable i.e. changeable
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1.slice(1, 3));

let arr2 = [6, 7, 8, 9, 10];
console.log(arr2.splice(2, 2));

// remove property in JS
var obj1 = {
    name: "Mohit Kucheriya",
    age: 23,
    city: "Jalgaon"
};

console.log(obj1);
delete obj1.city;
console.log(obj1);

// make the object immutable so that we can't update, add, or delete the values 
// for that we use Obbject.freeze();
let obj2 = {
    name: "Harry Potter",
    age: 25
};
Object.freeze(obj2);
console.log(obj2);

console.log("Even after updating the name value to Ron Wesely it cannot get changed and delete");
obj2.name = "Ron Wesely";
delete obj2.age;
console.log(obj2);

// Diff in update & change
const obj4 = {
    name: "Ron",
    age: 23
};
console.log(obj4)
obj4.name = "Draco";
console.log(obj4);
// But, we cannot change the wholw obj i.e. obj4 = 12
// obj4 = 12; this is not possible using const.

//  !! : Symbol
// All values in JS are either truthy or falsy value
// 1 = true & 0 = false

let arr3 = [1, 2, 3, 4, 5];
console.log(!arr3); // In these JS, will convert the array into truthy or true boolean values and adding '!' will make it false.
// Now,
console.log(!!arr3);  // (!arr3) = false & !(!arr3) = true

// get all unique values in a jS array
// for these we use new Set() method 
let arr5 = [1, 2, 3, 4, 5, 6, 6, 5, 4, 1, 2, 3, 3, 2, 1, 4, 5, 6, 7, 8, 9, 6, 5, 4, 8, 9, 6, 4, 9, 2, 3, 9, 6, 6, 2, 6, 3, 0,];
let newArr5 = new Set(arr5);
console.log(newArr5); // these value which we get is a Set of values which will unique i.e. no repetation of same number.
// Now, to store in these in tha array, Simply use 'spread operator' i.e. [...newArr5]
console.log([...newArr5]);

// currying : If we have a function & function havr two or more parameters in it then, take one argument or parameter in one function and remaining in other function i.e. returns remaining arguments in function.
// To break down one function in series of function 

function add(a, b) {
    console.log(a + b);
}
add(1305, 52655);
// Now, currying tells 
function oneNum(a) {
    return function twoNum(b) {
        return a + b; // this will return a function which we'll get store in final. 
    }
}
let final = oneNum(5);
console.log(final(34));

// pure function : 
// 1. function which will not change the global variable value.
// 2. function that always return same output/result if same arguments are passed.
// Example of pure function
var global = 12;
function abc(a) {
    console.log(a);
}
abc(50);
// Impure function : 
var impure = 10;
function xyz() {
    console.log(impure++);
}

xyz();
xyz();


