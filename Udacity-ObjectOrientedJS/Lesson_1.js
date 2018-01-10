// 1. Lexical Scope
// 2. Execution Context
var hero = aHero();
var newSaga = function() {
    var foil = aFoil();
    var saga = function() {
        var deed = aDeed();
        console.log(hero+deed+foil);
    };
    saga();
    saga();
}

newSaga();
newSaga();


