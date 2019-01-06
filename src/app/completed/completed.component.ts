import { Component, OnInit } from '@angular/core';
import{Select,Store} from '@ngxs/store';
import {TodoState}from '../state/todo.state';
@Component({
  selector: 'lw-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
  private tasks=[];
  constructor(private store:Store) { }
 

  ngOnInit() {
    this.store.select(TodoState.getCompletedTasks).subscribe((tsks)=>{
      this.tasks=tsks;
    })
  }

}
