// var x = 10;
// while (x <= 25) {
//   console.log('Printing out x = ' + x);
//   x = x + 2;
// }

////// Quiz; fizzbuzz with while loop 4-1
var x = 1;

while (x <= 20) {
    // check divisibility
    if (x % 3 === 0) {
        console.log("Julia");
    } else if (x % 5 === 0) {
        console.log("James");
    } else if (x % 3 === 0 && x % 5 ===0) {
        console.log("JuliaJames");
    } else {
        console.log(x)
    }
    x++;
}

////// Quiz; bottles of juice 4-2
// var num = 99;
// while (num > 0) {
//     console.log(num + (num === 1 ? " bottle" : " bottles") + " of juice on the wall! " + num + (num === 1 ? " bottle" : " bottles") + " of juice! Take one down, pass it around... " + (--num) + (num === 1 ? " bottle" : " bottles") + " of juice on the wall!");
//     // num--;
// }

// var solution = 1;
// for (var i = 12; i > 0; i--) {
//     solution *= i; // or solution = solution * i;
// }
// console.log(solution);


////// freeCodeCamp loops
function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        product *= arr[i][j];
      }
    }
    // Only change code above this line
    // return product;
    console.log(product);
  }
  
  // Modify values below to test your code
  multiplyAll([[1,2],[3,4],[5,6,7]]);
  