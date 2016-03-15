import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';

import { TodoInput } from './todo-input';
import { TodoService } from './todo-service';

@Component({
  selector: 'app',
  directives: [TodoInput],
  template: `<div>
    <todo-input></todo-input>
    Hello world!
  </div>`,
})

class App{}

bootstrap(App, [TodoService]);
