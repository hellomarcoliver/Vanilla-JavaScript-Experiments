// reference file: ...

var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos:');
    for (var i = 0; i < this.todos.length; i++) {
        console.log(this.todos[i].todoText);
      }
  },
  addTodo: function(todoTextNew1) {
    this.todos.push({ //this is the object that will be created when we add a todo
      todoText: todoTextNew1,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoTextNew2) {
    this.todos[position].todoText = todoTextNew2; //set it to a new value
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1)
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    const todo = this.todos[position];
    todo.completed = !todo.completed; //change value of completed with BANG operator
    this.displayTodos();
  }
};

console.log(todoList.addTodo('Hello1'));
console.log(todoList.addTodo('Hello2'));
console.log(todoList.changeTodo(0, 'Second'));
console.log(todoList.toggleCompleted(0)); //this will change it to true
