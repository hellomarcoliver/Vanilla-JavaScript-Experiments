// L7

var Car = function(loc) {
    var obj = Object.create(Car.prototype);
    obj.loc = loc;
    return obj;
};

// this was Car.method before, but JS has
// the built in prototype word for methods
// attached to any functions. It's freely provided
// for you to store things
Car.prototype.move = function() {
       this.loc++;
};
console.log(Car.prototype.constructor); // constructor points to Car
console.log(amy.constructor); //