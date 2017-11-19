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
var array = ["hello world", 42, true];

console.log(array[2]);
console.log(typeof array);

//FUNCTIONS /////////////////////////////////////////////
function foo() {
  return 42;
}
foo.bar = "Marc-Oliver";

console.log(typeof foo);
console.log(typeof foo());
console.log(typeof foo.bar);

//BUILT-IN METHODS /////////////////////////////////////////////

var a = "Hi There";
var b = 44.1234;

console.log(a.length, a.toUpperCase(), b.toFixed(2));
// methods exist on a the value a and b

//COERCION /////////////////////////////////////////////
// explicit and implicit Page 36
var a = "42";
var b = a * 2;
console.log(b);
var d = null;
console.log(d === true);

//CLOSURES 1 /////////////////////////////////////////////
function makeAdder(x) {
  function add(y) {
    return y + x;
  }
  return add;
}
var plusOne = makeAdder(1); //the function reference is plusOne
var plusTen = makeAdder(10);
console.log(plusOne(3)); // adds 3 (its inner y)
console.log(plusTen(13));
console.log(makeAdder(1)(3)); // basically what we did above

//CLOSURES 2 /////////////////////////////////////////////
function greet(whatToSay) {
  return function(name) {
    console.log(whatToSay + " " + name);
  };
}
var sayHi = greet("Hi");
sayHi("Toni");

//UDEMY 1 /////////////////////////////////////////////
function buildFunctions() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function() {
      console.log(i);
    });
  }
  return arr;
}

var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();

//UDEMY 2 /////////////////////////////////////////////
function buildFunctions2() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(
      (function(j) {
        return function() {
          console.log(j);
        };
      })(i)
    );
  }
  return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();
