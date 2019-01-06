import { Component, OnInit, OnDestroy} from '@angular/core';
import{Select,Store} from '@ngxs/store';
import {TodoState}from '../state/todo.state';


@Component({
  selector: 'lw-actve',
  templateUrl: './actve.component.html',
  styleUrls: ['./actve.component.css']
})
export class ActveComponent implements OnInit,OnDestroy {
  public tasks=[]; 
  private sub
  constructor(private store:Store,) { }
 

  ngOnInit() {
   this.sub= this.store.select(TodoState.getActiveTasks).subscribe((tsks)=>{
      this.tasks=tsks;
    })
  }
  
  ngOnDestroy(){
    this.sub.unsubscribe()
  }

}
