import { Pipe } from 'angular2/core';

@Pipe({
  name: 'search'
})
// needs new reference to rerun
// it speedup and changes from dirty checking into ref check
export class SearchPipe {

  transform(value, [term = '']) {
    return value.filter( (item) => item.title.startsWith(term));
  }
}
