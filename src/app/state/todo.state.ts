import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddTask,CompleteTask,UnCompleteTask,ArchiveTask,DeleteTask } from './todo.actions';
import {TodoModel} from'./todo.model'

export class TodoStateModel {
  public items: TodoModel[];
}

@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    items: []
  }
})
export class TodoState {
  @Action(AddTask)
  add(ctx: StateContext<TodoStateModel>, action: AddTask) {
    const state = ctx.getState();
    let newid=new Date().valueOf()+1;
    
    let payload={
      id:newid,
      ...action.payload
    }
 
    ctx.setState({ items: [ ...state.items, payload ] });
  }
  @Action(CompleteTask)
  complete(ctx: StateContext<TodoStateModel>, action: CompleteTask) {
    const state = ctx.getState();  
    state.items.forEach((a)=>{
      if(a.id==action.payload){
        a.completed=!a.completed;
      }
    })
    ctx.setState({items:[...state.items]});
  }
  @Action(UnCompleteTask)
  uncomplete(ctx: StateContext<TodoStateModel>, action: UnCompleteTask) {
    const state = ctx.getState();  
    state.items.forEach((a)=>{
      if(a.id==action.payload){
        a.completed=false;
      }
    })
    ctx.setState({items:[...state.items]});
  }
  @Action(ArchiveTask)
  Archive(ctx: StateContext<TodoStateModel>, action: ArchiveTask) {
    const state = ctx.getState();  
    state.items.forEach((a)=>{
      if(a.id==action.payload){
        a.archived=true;
      }
    })
    ctx.setState({items:[...state.items]});
  }
  @Action(DeleteTask)
  Delete(ctx: StateContext<TodoStateModel>, action: DeleteTask) {
    const state = ctx.getState();  
    const ns=state.items.filter(a=> a.id!==action.payload);
    ctx.setState({items:[...ns]});
  }
  
  
  
  
  
  @Selector()
  static getActiveTasks(state:TodoStateModel){
    return state.items.filter(s=>s.active==true && s.archived==false && s.completed==false);
  }
  @Selector()
  static getCompletedTasks(state:TodoStateModel){
    return state.items.filter(s=>s.archived==false && s.completed==true);
  }
  @Selector()
  static getArchivedTasks(state:TodoStateModel){
    return state.items.filter(s=>s.archived==true );
  }
  @Selector()
  static getTasks(state:TodoStateModel){
    return state.items.filter(s=>s.archived==false );
  }
}
