
// // Example
// var ourArr = [ 9, 10, 11, 12];
// var ourArr2 = [1, 2, 9, 10, 11, 223];
// var ourTotal = 0;

// for (var i = 0; i < ourArr.length; i++) {
//   ourTotal += ourArr[i];
// }

// // Reading out first and last element in array
// var newObject = {};
// newObject[ourArr[0]] = ourArr[ourArr.length-1];
// console.log(newObject);

// // with a function
// function transformFirstAndLast(array) {
//     var myNewObject = {};
//     myNewObject[array[0]] = ourArr2[array.length-1];
//     return myNewObject;
// }

// console.log(transformFirstAndLast(ourArr));
// console.log(transformFirstAndLast(ourArr2));


////////////
function transformFirstAndLast(array) {
    var myNewObject = {};
    myNewObject[array[0]] = array[array.length-1];
    console.log(myNewObject);
}

transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']);