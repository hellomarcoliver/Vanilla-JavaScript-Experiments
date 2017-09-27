const myName = ['Marc-Oliver', 'Peter', 'Hans']

// old
for (var i = 0; i < myName.length; i++) {
  console.log(myName[i])
}

// new
for (let value of myName) {
  console.log('New ES6:', value)
}

// another example
var products = [{
  id: 0,
  name: 'Product 1'
}, {
  id: 1,
  name: 'Product 2'
}]

// old with for loop
var productsIds = []
for (i = 0; i < products.length; i++) {
  productsIds.push(products[i].id)
}
console.log(productsIds) // [0, 1]

// new with map
var productsIds = products.map(product => product.id)
console.log(productsIds) // [0, 1]
