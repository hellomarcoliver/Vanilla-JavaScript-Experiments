const todos = ['item 0', 'item 1', 'item 2']

function displayTodos () {
  console.log('My Todos:', todos)
}
// change Todo with two parameters
function changeTodo (position, newValue) {
  todos[position] = newValue
  displayTodos()
}

changeTodo(0, 'Changed!')
