import { CompletedComponent } from './completed/completed.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualComponent } from './actual/actual.component';
import { ImportExportComponent } from './import-export/import-export.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  {
    path: 'tasks',
    children: [
      { path: '', component: TodolistComponent },
      // { path: 'actual', component: ActualComponent },
      // { path: 'completed', component: CompletedComponent },
    ]
  },
  { path: 'import-export', component: ImportExportComponent },
  { path: '**', redirectTo: 'tasks' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
