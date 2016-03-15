import { Component } from 'angular2/core';

import { TodoService } from './todo-service';

@Component({
  selector: 'todo-input',
  template: `
    <input type="text" #myInput />
    <div>Todo input!</div>
    <button (click)="onClick($event, myInput.value)">Click me</button>
  `,
})
export class TodoInput{
  constructor(public todoService: TodoService) {

  }

  onClick($event, value) {
    this.todoService.todos.push(value);
    console.log('clicked', $event, this.todoService.todos);
  }
};
