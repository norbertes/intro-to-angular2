import { Component, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'search-box',
  template: `
    Search Todo: <input #input
                        type="text"
                        (input)="update.emit(input.value)" />
  `,
})
export class SearchBox {
  @Output() update = new EventEmitter();
};
