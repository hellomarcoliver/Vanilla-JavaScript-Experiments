// this keyword
// what does 'this' refer to
// always check call time when looking for this


// in this case, the fn function is a property of object
object.fn(3, 4);
// the object found to the left of the dot 
// (the call time dot) where the
// containing function is called

var r={}, g={}, b={}, y={};

var fn = function(one, two) {
    console.log(this, one, two);
};

// call the function as a method and make it a property of the red object
r.method = fn;
r.method(g,b) // r{}, g{}, b{}
fn(g,b); // g{}, b{}
fn.call(r,g,b); // r{}, g{}, b{}
r.method.call(y,g,b); // y{}, g{}, b{}

// always check where and when the function gets invoked
