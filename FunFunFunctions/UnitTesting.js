// items in a basket as an object with an array
const someOrder = {
    items: [
        { name: 'Dragon Food', price: 80 },
        { name: 'Dragon Cage (small)', price: 800 }
    ]
}

// calculate Total and add it to variable orderTotal
const orderTotal = order => order.items
    .reduce((prev, cur) => prev + cur.price, 0)


result = orderTotal(someOrder)
// result 880

console.log(orderTotal)


// REDUCE ////////////////////////////////////////////
