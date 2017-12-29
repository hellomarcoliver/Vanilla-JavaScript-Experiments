//////////// forEACH loop
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

function printDonuts(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
};
donuts.forEach(printDonuts);



////// turn the above into an INLINE FUNCTION EXPRESSION
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});