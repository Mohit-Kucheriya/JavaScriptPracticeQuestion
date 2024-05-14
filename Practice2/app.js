// map
var arr = [1, 2, 3, 4, 5];
let ans = arr.map(function (val) {
    return val * 2;
});
console.log(ans);

// Qs1.
let arr1 = ["apple", "orange", "mango", "a", "aeroplane"];
let res = arr1.map(function (val) {
    if (val.length == 5) {
        return `<p>${val}</p>`;
    }
    else {
        return `<span>${val}</span>`;
    }
});
console.log(res);

let obj = [
    { name: "Mohit", age: 23 },
    { name: "Draco", age: 22 },
    { name: "Harry", age: 25 },
    { name: "Ron", age: 22 },
    { name: "Hermoine", age: 24 },
    { name: "Hagrid", age: 20 },
];

let objAns = obj.map(function (val) {
    return val.name;
});
console.log(objAns);

// filter : always return boolean
let arr2 = [1, 2, 3, 4, 5];
let arr2Ans = arr2.filter(function (val) {
    if (val % 2 === 0) {
        return true;
    }
});
console.log(arr2Ans);

var arrName = ["Mohit", "Dia", "Ruchita", "Hermoine", "Ron"]

var resName = arrName.filter(function (val) {
    return !val.includes("a"); // this will return true but we want name not including 'a' in them. so make true to false add '!'
});
console.log(resName);

// iife: (function(){})()
// Example : 
let result = (function () {
    var a = 12;
    return {
        getter: function () { // by these getter function, we can get the value
            console.log("getter :", a);
        },
        setter: function (prm) { // by these setter function, we can set the value,
            a = prm;
        }
    }

})();
console.log(result);
result.setter(50);
result.getter();
