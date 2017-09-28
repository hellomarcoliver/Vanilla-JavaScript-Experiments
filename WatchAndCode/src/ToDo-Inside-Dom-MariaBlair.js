var todoList = {
  todos: [],

  // we removed our this.displayTodos()

  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },

  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },

  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },

  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },

  toggleAll: function() {

    // Case 1: if all true, make them all false:
    // # of completed todos = # of all todos

    // Since we need to compare them, let's create vars:
    var allTodos = this.todos.length;
    var completedTodos = 0;

    // Get # of completed todos:
    for (var i = 0; i < allTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }

    // Case 1: if everything is true, make them all false:
    if (completedTodos === allTodos) {
      // make everthing false:
      for (var i = 0; i < allTodos; i++) {
        this.todos[i].completed = false;
      }
      // this.displayTodos(); -- we don't need display for every case - just in the end
    } else {



      // Case 2:  If some are true, make them all true:

      // even if only 1 is true, so we need to find the 1st true:
      for (var k = 0; k < allTodos; k++) {
        this.todos[k].completed = true;
      }
    }
    // after the case logic, it will display the outcome:
  }

};

//in Version 9 we escape the console by adding view.displayTodos() to each handler:
var handlers = {

  addTodo: function() {
    var addTodoInputText = document.getElementById('addTodoInputText');
    todoList.addTodo(addTodoInputText.value);
    addTodoInputText.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber, 1);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};

// ***VIEW***
// This object only deals with the display, it doesn't mess with the data:
var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    // this will clear the list so we don't keep adding existing items to the list:
    todosUl.innerHTML = '';
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';

      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }

      // new method (or property)!  .textContent
      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }
  }
};

// todoList.addTodo('skydiving');
// todoList.addTodo('fishing');
// todoList.addTodo('hunting');
// todoList.toggleCompleted(0);
// todoList.toggleCompleted(1);
// todoList.toggleCompleted(2);
// todoList.toggleAll();
