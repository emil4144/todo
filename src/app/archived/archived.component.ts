import { Component, OnInit, OnDestroy } from '@angular/core';
import{Select, Store} from '@ngxs/store';
import {TodoState}from '../state/todo.state';
@Component({
  selector: 'lw-archived',
  templateUrl: './archived.component.html',
  styleUrls: ['./archived.component.css']
})
export class ArchivedComponent implements OnInit, OnDestroy {
  public tasks=[];
  private sub
  
  constructor(private store:Store) { }
 

  ngOnInit() {
   this.sub= this.store.select(TodoState.getArchivedTasks).subscribe((tsks)=>{
      this.tasks=tsks;
    })
  }
  ngOnDestroy(){
    this.sub.unsubscribe()
  }

}
