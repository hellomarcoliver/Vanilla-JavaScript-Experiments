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
  }
}

console.log(todoList.addTodo('Hello1'))
console.log(todoList.addTodo('Hello2'))
console.log(todoList.toggleCompleted(0)) // this will change it to true
