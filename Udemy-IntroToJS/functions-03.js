//////////// forEACH loop
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

function printDonuts(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
};
donuts.forEach(printDonuts);



//////////// turn the above into an INLINE FUNCTION EXPRESSION
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});


////////////  * Programming Quiz: Another Type of Loop (6-8)
var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];

test.forEach(function(num, index, array) {
  if (num % 3 === 0) {
      array[index] += 100;
  }
});
console.log(test);