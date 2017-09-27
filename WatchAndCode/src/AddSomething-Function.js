const todos = ['item 0', 'item 1', 'item 2']

function displayTodos () {
  console.log('My Todos:', todos)
}
// add new Todo
// customize the behavior with a parameter 'todo'
function addTodo (parameter) {
  todos.push(parameter)
  displayTodos()
}

addTodo('hello there folks') // this is the parameter

// ---------------------------------------------------------------
// function displayTodos() {
//   console.log('My Todos:', todos);
// }
//
// displayTodos();
//
//
// function addTodo() {
//   todos.push('new todo');
//   displayTodos();
// }
//
// addTodo();
