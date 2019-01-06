import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ActveComponent } from './actve/actve.component';
import { CompletedComponent } from './completed/completed.component';
import { ArchivedComponent } from './archived/archived.component';
const routes: Routes = [
  {path:"home", component:MainPageComponent},
  {path:"tasks", component:TaskListComponent},
  {path:"active", component:ActveComponent},
  {path:"complete", component:CompletedComponent},
  {path:"archive", component:ArchivedComponent},
  {path:"**", redirectTo:"home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
