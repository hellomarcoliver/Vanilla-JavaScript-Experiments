//OBJECTS /////////////////////////////////////////////
// use objects for named properties
var object1 = {
    a: "Hans Peter",
    b: 42,
    c: true
};
// property a hold value "Hans Peter"
console.log(object1.a, object1.c); // dot notation
console.log(object1["b"]); // bracket notation

var b = "a";
console.log(object1[b]); // Hans Peter – the var b in line 11
console.log(object1["b"]); // 42 – the value in the object


//ARRAYS /////////////////////////////////////////////
// Arrays and functions are subtypes of objects
// use it for numerically positioned values
var array = [
    "hello world",
    42,
    true
];

console.log(array[2]);
console.log(typeof array);


//FUNCTIONS /////////////////////////////////////////////
function foo() {
    return 42
};
foo.bar = "Marc-Oliver"

console.log(typeof foo);
console.log(typeof foo());
console.log(typeof foo.bar);


//BUILT-IN METHODS /////////////////////////////////////////////

var a = "Hi There";
var b = 44.1234;

console.log(a.length, a.toUpperCase(), b.toFixed(2));





