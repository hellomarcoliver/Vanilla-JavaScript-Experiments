
// Refactoring  Step 2 (a decorator) 
var carlike = function(obj, loc) {
    obj.loc = loc;
    obj.move = function() {
        this.loc++;
    };
    return obj;
};

// Refactoring Step 1
// new file with functions
// var move = fundtion(car) {
//     this.loc++; // had to change it from car
// };
