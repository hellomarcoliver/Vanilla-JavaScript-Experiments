const todos = ['item 0', 'item 1', 'item 2'];

function displayTodos () {
  console.log('My Todos:', todos)
}
// delete an item in todos
function deleteTodo (position) {
  todos.splice(position, 1)
  displayTodos() // run functions inside other functions
}

deleteTodo(1)
