function printAmount(amt) {
    console.log(amt.toFixed(2));
}

function formatAmount() {
    return "$" + amount.toFixed(2);
}

var amount = 99.9999;

amount = formatAmount();
console.log(amount);