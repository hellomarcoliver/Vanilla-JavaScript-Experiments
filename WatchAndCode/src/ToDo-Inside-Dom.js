const todoList = {
  todos: [],
  displayTodos: function () {
    if (this.todos.length === 0) { // check if list is empty
      console.log('List is empty!')
    } else {
      console.log('My Todos:')
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) { // check if completed is true
          console.log('(X)', this.todos[i].todoText)
        } else {
          console.log('()', this.todos[i].todoText)
        }
      }
    }
  },
  addTodo: function (todoTextNew1) {
    this.todos.push({ // this is the object that will be created when we add a todo
      todoText: todoTextNew1,
      completed: false
    })
    this.displayTodos()
  },
  changeTodo: function (position, todoTextNew2) {
    this.todos[position].todoText = todoTextNew2 // set it to a new value
    this.displayTodos()
  },
  deleteTodo: function (position) {
    this.todos.splice(position, 1)
    this.displayTodos()
  },
  toggleCompleted: function (position) {
    var todo = this.todos[position]
    todo.completed = !todo.completed // change value of completed with BANG operator
    this.displayTodos()
  },
  toggleAll: function () {
    var totalTodos = this.todos.length // record total of todos
    var completedTodos = 0 // record total of completed todos

    // count the number of completed todos
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++
      }
    }
    // case 1: if everything is true, make everything false
    if (completedTodos === totalTodos) {
      for (i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false
      }
      // case 2: otherwise, make everything true
    } else {
      for (i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false
      }
    }
    this.displayTodos()
  }
}

console.log(todoList.addTodo('Hello1'))
console.log(todoList.addTodo('Hello2'))
console.log(todoList.addTodo('Hello3'))
console.log(todoList.toggleCompleted(0)) // this will change item 0 to true
console.log(todoList.toggleCompleted(1)) // this will change it 1 true
console.log(todoList.toggleAll()) // this will uncheck all
console.log(todoList.toggleCompleted(0))
console.log(todoList.toggleAll()) // this will uncheck all
console.log(todoList.displayTodos()) // this will show all items in list
