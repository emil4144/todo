import { Component, OnInit, OnDestroy } from '@angular/core';
import{Select,Store} from '@ngxs/store';
import {TodoState}from '../state/todo.state';
@Component({
  selector: 'lw-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit, OnDestroy {
  public tasks=[];
  private sub
  constructor(private store:Store) { }
 

  ngOnInit() {
    this.sub=this.store.select(TodoState.getCompletedTasks).subscribe((tsks)=>{
      this.tasks=tsks;
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe()
  }

}
