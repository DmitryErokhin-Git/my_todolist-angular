// import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoService } from './service/todo.service';
// import { CompletedComponent } from './completed/completed.component';
import { ImportExportComponent } from './import-export/import-export.component';
// import { ActualComponent } from './actual/actual.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { MatBadgeModule } from '@angular/material/badge';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SelectPipe } from './pipe/select.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBar} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TodolistComponent,
    // CompletedComponent,
    ImportExportComponent,
    // ActualComponent,
    SelectPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    // ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatSlideToggleModule,
    // MatBadgeModule,
    // RouterModule,
    NgxMatFileInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatProgressBarModule,
  ],
  providers: [TodoService,
    MatSnackBar
    /*FileSaverService */],
  bootstrap: [AppComponent]
})
export class AppModule { }
