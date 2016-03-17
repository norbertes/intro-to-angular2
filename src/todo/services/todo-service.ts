import { Injectable } from 'angular2/core';

import { TodoModel } from './todo-model';

@Injectable()
export class TodoService {
  todos:TodoModel[] = [
    new TodoModel("eat"),
    new TodoModel("sleep"),
    new TodoModel("code"),
    new TodoModel("shave", "completed"),
    new TodoModel("sing"),
    new TodoModel("dance"),
    new TodoModel("drink", "completed"),
    new TodoModel("pray"),
    new TodoModel("watch", "completed"),
    new TodoModel("enjoy", "completed"),
    new TodoModel("laugh"),
    new TodoModel("write"),
  ];

  addTodo(todo:TodoModel) {
    this.todos = [...this.todos, todo];
  }

  toggleTodo(todo:TodoModel) {
    const i = this.todos.indexOf(todo);
    const status = todo.status == 'started' ? 'completed' : 'started';
    const toggledTodo = Object.assign({}, todo, {status});
    this.todos = [
      ...this.todos.slice(0, i),
      toggledTodo,
      ...this.todos.slice(i + 1),
    ]
  }
}
