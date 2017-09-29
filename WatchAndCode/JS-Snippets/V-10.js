// -------------------------
var productOf2And10 = multiplyTwoNumbers(2, 10)

function multiplyTwoNumbers (a, b) {
  var result = a * b
  return result // always return the value you want, otherwise its undefined
}

console.log(productOf2And10)

// -------------------------
var productOf3And10 = function multiplyTwoNumbers (a, b) {
  var result = a * b
  return result
}

console.log(productOf3And10(3, 10))
// -------------------------

// noisy accepts argument f (where f itself appears to be a function)
function noisy (passedFunc) {
  // noisy returns a new function that takes an argument arg
  return function (arg) {
    // when this new function is called, it logs to console
    console.log('calling with', arg)
    // the function you originally passed to noisy is now called, with the return value stored in val
    var val = passedFunc(arg) // is Boolean(0)
    // return value val also logged to console
    console.log('called with', arg, '- got', val)
    // return value val is returned from the generated function
    return val
  }
}
// noisy is called with the inbuilt function Boolean and the argument 0 (to test the boolean value of 0)
noisy(Boolean)(0)
