// L6 – A class builds the object that
// it is going to augment, where as a decorator
// accepts the objects it will augment as an input

// name a class with a Capital Letter
// this is a constructor
var Car = function(loc) {
    var obj = {loc: loc};
    extend(obj, Car.methods);
    return obj;
};

// Remember: FUNCTIONS ARE JUST SPECIALIZED OBJECTS
// Added a property method to the Car function
Car.methods = { // removed var to avoid beeing it a global var
    move : function() {
        this.loc++;
    }
};
