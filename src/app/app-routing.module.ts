import { CompletedComponent } from './completed/completed.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualComponent } from './actual/actual.component';
import { ImportExportComponent } from './import-export/import-export.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  {
    path: 'todo',
    children: [
      { path: '', component: TodolistComponent },
      { path: 'actual', component: ActualComponent },
      { path: 'completed', component: CompletedComponent },
    ]
  },
  { path: 'impex', component: ImportExportComponent },
  { path: '**', redirectTo: 'todo' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
