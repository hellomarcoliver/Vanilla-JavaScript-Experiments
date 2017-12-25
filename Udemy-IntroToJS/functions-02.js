
////// function expression catSays
var catSays = function(max) {
    var catMessage = "";
    for (var i = 0; i < max; i++) {
      catMessage += "meow ";
    }
    return catMessage;
  };
  
  // function declaration helloCat accepting a callback
  function helloCat(callbackFuncy) {
    return "Hello " + callbackFuncy(2);
  }
  
  // pass in catSays as a callback function
console.log(helloCat(catSays));


////// pass a function into another function inline
function movies(messageFunction, name) {
    messageFunction(name);
  }
  
  // Call the movies function, pass in the function and name of movie
  movies(function displayFavorite(movieName) {
    console.log("My favorite movie is " + movieName);
  }, "Finding Nemo");


 /*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression
// SOLUTION 1
// emotions("happy", function (laughs) {
//     var message = "";
//     for (var i = 0; i < laughs; i++) {
//       message += "ha";
// }
//     return message + "!";
// });
// SOLUTION 2
emotions("happy", function(n) {return "ha".repeat(n) + "!";});
