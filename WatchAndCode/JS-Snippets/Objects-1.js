const myName = {
  name: 'Marc-Oliver Gern',
  // sayName is a method on the myName object
  sayName: function sayName () { // you can delete the 2nd sayName (anonymous)
    console.log(this.name)
  }
}

myName.sayName()
