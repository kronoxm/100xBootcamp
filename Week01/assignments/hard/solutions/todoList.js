/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos [*]
    - remove(indexOfTodo): remove todo from list of todos [*]
    - update(index, updatedTodo): update todo at given index [*]
    - getAll: returns all todos [*]
    - get(indexOfTodo): returns todo at given index [*]
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todo = [];
  }

  add(todo) {
    this.todo.push(todo);
  }

  getAll() {
    return this.todo;
  }

  get(todoIndex) {
    return todoIndex < this.todo.length ? this.todo[todoIndex] : null;
  }

  remove(todoIndex) {
    if (todoIndex > -1 && todoIndex < this.todo.length)
      this.todo.splice(todoIndex, 1);
  }

  update(todoIndex, todo) {
    const invalid = "invalid";
    if (!todo.toLowerCase().includes(invalid) && todoIndex < this.todo.length)
      this.todo[todoIndex] = todo;
  }

  clear() {
    this.todo = [];
  }
}

const todoList = new Todo();
todoList.add("task1");
todoList.add("task2");
todoList.add("task3");
console.log(todoList.getAll());
todoList.remove(1);
console.log(todoList.getAll());
todoList.update(0, "Inva task 3");
console.log(todoList.getAll());
console.log(todoList.get(5));
console.log(todoList.clear());

module.exports = Todo;
