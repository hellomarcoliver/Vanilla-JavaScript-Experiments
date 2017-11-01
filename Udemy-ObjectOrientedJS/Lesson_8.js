var Car = function(loc) {
  var obj = Object.create(Car.prototype);
  obj.loc = loc;
  return obj;
};

var amy = Car(1);
var ben = Car(9);

Car.prototype.move = function() {
  this.loc++;
};

amy.move();
ben.move();

console.log(Car.prototype.constructor); // [Function: Car]
console.log(amy.constructor); // [Function: Car]
