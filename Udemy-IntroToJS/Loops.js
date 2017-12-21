// var x = 10;
// while (x <= 25) {
//   console.log('Printing out x = ' + x);
//   x = x + 2;
// }

// Fizzbuzz with while loop
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
