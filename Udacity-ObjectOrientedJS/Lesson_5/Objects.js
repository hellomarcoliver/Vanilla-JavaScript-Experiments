// L5 – Object Decorator Pattern
// ... code reuse
// don't repeat yourself

// intital code with what we started with
var amy = {
    loc: 1
}; 
amy.loc++;
var ben = {
    loc: 9
}; 
ben.loc++;



// new objects after refactoring:
var amy = carlike({}, 1); 
move(amy);
var ben = carlike({}, 9); 
move(ben)