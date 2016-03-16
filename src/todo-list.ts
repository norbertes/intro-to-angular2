import { Component } from 'angular2/core';

import { TodoService } from './todo-service';
import { TodoItemRenderer } from './todo-item-renderer';

import { SearchPipe } from './search-pipe';
import { StartedPipe } from './started-pipe';

@Component({
  selector: 'todo-list',
  pipes: [SearchPipe, StartedPipe],
  directives: [TodoItemRenderer],
  template: `<div>
    <ul>
      <li *ngFor="#todo of todoService.todos | search | started">
        <todo-item-renderer
          [todo]="todo"
          (toggle)="todoService.toggleTodo($event)">
        </todo-item-renderer>
      </li>
    </ul>
  </div>`,
})
export class TodoList {
  constructor(public todoService: TodoService) {}
};
