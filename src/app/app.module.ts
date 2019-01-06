import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ActveComponent } from './actve/actve.component';
import { CompletedComponent } from './completed/completed.component';
import { ArchivedComponent } from './archived/archived.component';
import {NgxsModule} from '@ngxs/store';
import {TodoState} from './state/todo.state';
import { NgHoverDirective } from './ng-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    TaskListComponent,
    ActveComponent,
    CompletedComponent,
    ArchivedComponent,
    NgHoverDirective,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxsModule.forRoot([TodoState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
