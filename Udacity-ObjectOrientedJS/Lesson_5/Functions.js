
// L5 – Object Decorator Patterns
// Refactoring  Step 2 (a decorator) 
var carlike = function(obj, loc) {
    obj.loc = loc;
    obj.move = function() {
        obj.loc++; /// replaced this
    };
    return obj;
};

// Refactoring Step 1
// new file with functions
// var move = fundtion(car) {
//     this.loc++; // had to change it from car
// };
