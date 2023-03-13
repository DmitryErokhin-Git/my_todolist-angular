import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  { path: '', redirectTo: 'todolist', pathMatch: 'full' },
  { path: 'todolist', component: TodolistComponent },
  { path: 'tasks', component: TasksComponent },
  { path: '**', redirectTo: 'tasks'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
