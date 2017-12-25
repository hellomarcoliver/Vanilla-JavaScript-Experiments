
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