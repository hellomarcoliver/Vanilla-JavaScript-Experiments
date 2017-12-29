//////////// for loop
var donuts1 = ["jelly donut", "chocolate donut", "glazed donut"];
for (var i = 0; i <= donuts1.length; i = i + 2) {
    console.log(donuts1[i]);
    if (i === 2) {
        break;
    }
}

//////////// .forEach(func)
var donuts2 = ["jelly donut 2", "chocolate donut 2", "glazed donut 2"];
donuts2.forEach(function(elem) {
    console.log(elem);
});

//////////// .map(func)
var donuts3 = [0, 1, 2];
var newArray = donuts3.map(function(elem) {
    elem = elem + 100;
    //return elem;
    console.log(elem);
});
