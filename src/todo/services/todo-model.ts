export class TodoModel {
  constructor(
    public title:string = '',
    public status:string = 'started'
  ) {}

  // Mutating is baaad (performance reasons)
  // Assign new istances ftw
  toggle():void {
    this.status = this.status == 'started' ? 'completed' : 'started';
  }
}
