import { Component, OnInit } from '@angular/core';
import {Store,Select} from '@ngxs/store';
import {AddTask} from '../state/todo.actions';
import{TodoState}from'../state/todo.state';

@Component({
  selector: 'lw-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit { 
  public tasks=[];
  public task:string="";
  constructor(private store:Store) { }  
  ngOnInit() {
    this.store.select(state=>state.todo.items).subscribe((tsks)=>{
      this.tasks=tsks;          
    })      
  }
  CreateTask(){    
    if(this.task==""|| this.task==null){}
    else{
      this.store.dispatch(new AddTask({tsk:this.task, active:true,completed:false,archived:false}));
      this.task="";      
    }    
  }  
}
