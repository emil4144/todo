import { Component, OnInit } from '@angular/core';
import{Select,Store} from '@ngxs/store';
import {TodoState}from '../state/todo.state';
import { CompleteTask, UnCompleteTask,DeleteTask,ArchiveTask } from '../state/todo.actions';

@Component({
  selector: 'lw-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  private show=false;
  private tasks=[];
  private error="";
  private vb="none";
  constructor(private store:Store) { }

  ngOnInit() {
    this.store.select(TodoState.getTasks).subscribe((tsks)=>{
      this.tasks=tsks;
    })
  }  
  tskComplete(id){
    this.store.dispatch(new CompleteTask(id));
  }
  archiveTask(id, complete){
  if (complete){
    this.store.dispatch(new ArchiveTask(id));
    this.vb="none";
    this.error="";
  }
  else{
    this.vb="block";
    this.error="Please at first complete task!";
  }
    
  }
  deleteTask(id, complete){  
    if (!complete){
      this.store.dispatch(new DeleteTask(id));    
      this.vb="none";
      this.error="";
    }
    else{
      this.vb="block";
      this.error="Please archivate completed tasks!";
    }
  }
}
