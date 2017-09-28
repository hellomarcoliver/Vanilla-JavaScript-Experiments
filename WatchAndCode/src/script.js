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
  addTodo: function (todoText) {
    this.todos.push({ // this is the object that will be created when we add a todo
      todoText: todoText,
      completed: false
    })
    this.displayTodos()
  },
  changeTodo: function (position, todoText) {
    this.todos[position].todoText = todoText // set it to a new value
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
    // debugger;
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
        this.todos[i].completed = true
      }
    }
    this.displayTodos()
  }
}

// combines all handlers (as methods) and click events
var handlers = {
  displayTodos: function () {
    todoList.displayTodos()
  },
  toggleAll: function () {
    todoList.toggleAll()
  },
  addTodo: function () {
    var addTodoTextInput = document.getElementById('addTodoTextInput')
    todoList.addTodo(addTodoTextInput.value) // value is what users typed
    addTodoTextInput.value = ''
  },
  changeTodo: function () {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput')
    var changeTodoTextInput = document.getElementById('changeTodoTextInput')
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value)
    changeTodoPositionInput.value = ''
    changeTodoTextInput.value = ''
  }
}
