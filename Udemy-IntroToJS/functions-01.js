// Big Laughs 2
// function laugh(num) {
//     var laughs = "";
//     for (var i = 0; i < num; i++) {
//         laughs += "ha";
//     }
//     return laughs  + "!";
// }
// console.log(laugh(3))


////// is a prime number
// function isPrime(integer) {
//     for (var x = 2; x < integer; x++) {
//         if (integer % x === 0) {
//             console.log(integer + " is divisible by " + x);
//             // return false;
//         }
//     }
//     // return true;
// }
// isPrime(12);

function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
      line += "* "
    }
    return line + "\n";
  }
  console.log(makeLine(3));