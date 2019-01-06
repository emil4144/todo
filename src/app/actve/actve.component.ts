import { Component, OnInit} from '@angular/core';
import{Select,Store} from '@ngxs/store';
import {TodoState}from '../state/todo.state'
import { Observable} from 'rxjs';


@Component({
  selector: 'lw-actve',
  templateUrl: './actve.component.html',
  styleUrls: ['./actve.component.css']
})
export class ActveComponent implements OnInit {
  private tasks=[]; 
  
  constructor(private store:Store,) { }
 

  ngOnInit() {
    this.store.select(TodoState.getActiveTasks).subscribe((tsks)=>{
      this.tasks=tsks;
    })
  }
  

}
