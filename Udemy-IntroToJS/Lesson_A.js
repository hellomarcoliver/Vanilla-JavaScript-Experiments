// indexing starts at 0
var name = "Marc";
name[1];
console.log(name[0]);

// Escaping characters
// \\	\ (backslash)
// \"	'' (double quote)
// \'	' (single quote)
// \n	newline
// \t	tab

// data types:
// number, string, boolean, null, undefined
// null = no value (does not exist)
// undefined = absence of a value
// NaN - not a number

// Programming Quiz: Even or Odd (3-2)
var number = 2;

if (number % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}

//
var room = "gallery";
var suspect = "Ms. Van Cleve";
var weapon = "";
var solved = false;

if (room === "gallery") {
    weapon = "trophy";
      if (suspect === "Ms. Van Cleve") {
      solved = true; 
    }
} else if (room === "ballroom") {
    weapon = "poison"; 
        if (suspect === "Mr. Kalehoff") {
        solved = true;
        }
} else if (room === "billiards room") {
    weapon = "pool stick";
        if (suspect === "Mrs. Sparr") {
        solved = true;
        }
} else {
    weapon = "knife";
      if (suspect === "Mr. Parkes") {
      solved = true;
      }
}
if (solved) {
	console.log(suspect +" did it in the "+ room + " with the "+ weapon +"!");
}

// Programming Quiz: Ice Cream (3-6)

var flavor = "chocolate";
var vessel = "hand";
var toppings = "sprinkles";

// Add your code here
if (((flavor === "vanilla") || (flavor === "chocolate")) && ((toppings === "sprinkles") || (toppings === "peanuts")) && ((vessel === "cone") || (vessel === "bowl"))) {
    console.log("I\'d like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
}