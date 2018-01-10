// Prototypes for code sharing and saving memory.
// make objects that resemble other objects
var gold = {
    a:1
};
console.log(gold.a); // 1
console.log(gold.z); //undefiend

var blue = extend({}, gold); // extend is jquery
// this copy operation is one time also refered
// to as onetime property copying
blue.b = 2;
console.log(blue.a);
console.log(blue.b);
console.log(blue.z);


var rose = Object.create(gold);
// this is an ongoing lookup-time delegation
rose.b = 2;
console.log(rose.a);

// there are array prototypes and object prototypes
// 