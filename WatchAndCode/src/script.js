const todoList = {
  todos: [],
  addTodo: function (todoText) {
    this.todos.push({ // this is the object that will be created when we add a todo
      todoText: todoText,
      completed: false
    })
  },
  changeTodo: function (position, todoText) {
    this.todos[position].todoText = todoText // set it to a new value
  },
  deleteTodo: function (position) {
    this.todos.splice(position, 1)
  },
  toggleCompleted: function (position) {
    var todo = this.todos[position]
    todo.completed = !todo.completed // change value of completed with BANG operator
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
  }
}

// combines all handlers (as methods) and click events
var handlers = {
  addTodo: function () {
    var addTodoTextInput = document.getElementById('addTodoTextInput')
    todoList.addTodo(addTodoTextInput.value) // value is what users typed
    addTodoTextInput.value = ''
    view.displayTodos()
  },
  changeTodo: function () {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput')
    var changeTodoTextInput = document.getElementById('changeTodoTextInput')
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value)
    changeTodoPositionInput.value = ''
    changeTodoTextInput.value = ''
    view.displayTodos()
  },
  deleteTodo: function () {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput') // grab input first
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber) // pass number into deleteTodo object
    deleteTodoPositionInput.value = '' // clear input
    view.displayTodos()
  },
  toggleCompleted: function () {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput')
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber)
    toggleCompletedPositionInput.value = ''
    view.displayTodos()
  },
  toggleAll: function () {
    todoList.toggleAll()
    view.displayTodos()
  }
}

// shows stuff
var view = {
  displayTodos: function () {
    var todosUl = document.querySelector('ul')
    todosUl.innerHTML = ''
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li')
      var todo = todoList.todos[i] // destructuring
      var todoTextWithCompletion = ''

      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText
      }

      // append the DOM
      todoLi.textContent = todoTextWithCompletion
      todosUl.appendChild(todoLi)
    }
  }
}
