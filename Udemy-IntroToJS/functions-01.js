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

////// Build A Triangle with a function declaration
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
      line += "* "
    }
    return line + "\n";
  }

function buildTriangle(width) {
    var row = "";
    for(var i = 1; i <= width; i++) {
        row += makeLine(i)
    }
    return row;
}
console.log(buildTriangle(10));


////// count numbers up
function count(num) {
    for (var i = 1; i <= num; i++) {
        console.log(i);
    }
    return num
}
count(6);
