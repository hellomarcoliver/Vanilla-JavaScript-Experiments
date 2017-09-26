// using the objects and functions from previous lessons and
// transfer them into one objects with methods
// methods are simply functions on objects

const todoList = {
  todos: ['item 1', 'item 2', 'item 3', 'item 4'],
  displayTodos: function() {
    console.log('My Todos:', this.todos);
  },
  addTodo: function(todo) { //addTodo as method
    this.todos.push(todo);  //reference the above object with this
    this.displayTodos();
  },
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1)
    this.displayTodos();
  }
};

console.log(todoList.displayTodos());
console.log(todoList.changeTodo(0, 'first'));
console.log(todoList.deleteTodo(1));
