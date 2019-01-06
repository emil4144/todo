import {TodoModelA} from'./todo.model'
export class AddTask {
  static readonly type = '[Todo] Add item';
  constructor(public payload: TodoModelA) { }
}
export class CompleteTask {
  static readonly type = '[Todo] Complete item';
  constructor(public payload: number) { }
}
export class UnCompleteTask {
  static readonly type = '[Todo] UnComplete item';
  constructor(public payload: number) { }
}
export class ArchiveTask {
  static readonly type = '[Todo] Archive item';
  constructor(public payload: number) { }
}
export class DeleteTask {
  static readonly type = '[Todo] Delete item';
  constructor(public payload: number) { }
}