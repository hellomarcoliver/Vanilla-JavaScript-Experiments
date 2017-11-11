// function printAmount(amt) {
//     console.log(amt.toFixed(2));
// }
// function formatAmount() {
//     return "$" + amount.toFixed(2);
// }
// var amount = 99.9999;
// amount = formatAmount();
// console.log(amount);


// Let's add TAX /////////////////////////////
// const TAX_RATE = 0.08;

// function calculateFinalAmount(amt) {
//     amt = amt + (amt * TAX_RATE);
//     return amt;
// }
// at this point: the var amt has stored the output of the 
// calculation and pass it ot to calculateFinalAmount

// var amount = 99.9999;
// amount = calculateFinalAmount(amount);
// console.log(amount.toFixed(2));

// function one() {
//     var a = 11;
//     console.log(a);
// }

// console.log(one());

// Practice /////////////////////////////
const SPEND_THRESHOLD = 100;
const TAX_RATE = 0.1;
const PHONE_PRICE = 50;
const ACCESSORY_PRICE = 10;
var bank_balance = 150;
var amount = 0;

// add TAX to price
function calculateTax(amount) {
    return amount * TAX_RATE;
}

function formatAmount(amount) {
    return "$" + amount.toFixed(2);
}

// keep buying phones while you still have money
while (amount < bank_balance) {
    // buy new phone
    amount = amount + PHONE_PRICE;
    // can we afford accessories?
    if (amount < SPEND_THRESHOLD) {
    amount = amount + ACCESSORY_PRICE;
    }
}

//add tax now
amount = amount + calculateTax(amount);

console.log("Your purchase price is " + formatAmount(amount));

// can you afford it?
if (amount > bank_balance) {
    console.log("You cannot afford this purchase.")
} else if (amount < bank_balance) {
    console.log("Great. Let\'s get it."); // this wont work because the code above keep adding
}

// ANOTHER TEST 1
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    // Your code below this line
    result = "My " + myNoun + " is " + myAdjective + " and it can " + myVerb + " super " + myAdverb;
  
    // Your code above this line
    return result;
  }
  
  // Change the words here to test your function
  wordBlanks("dog", "big", "ran", "quickly");
  




