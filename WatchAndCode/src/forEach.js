var students = ['Peter', 'Hans']

function logName (name) {
  console.log(name)
}

// very tedious
logName(students[0]) // 1
logName(students[1])

// better
for (var i = 0; i < students.length; i++) {
  logName(students[i]) // 2
}

// even shorter
students.forEach(logName) // 3

// super

students.forEach(function logName (name) {
  console.log(name, name) // 4
})

// or do the shorter version of the above
students.forEach(function (name) {
  console.log(name) // 5
})

// home made forEach function
function forEach(myArray, myFunction) {
  for (var i = 0; i < myArray.length; i++) {
    myFunction(myArray[i])
  }
}

// let's run the last one
// forEach is the HigherOrderFunction
// function(student)... is the callBack function
forEach(students, function (student) {
  console.log('Hello', student)
})
