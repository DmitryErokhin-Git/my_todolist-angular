import { TodoService } from './../service/todo.service';
import { IpmortExportService } from '../service/import-export';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-import-export',
  templateUrl: './import-export.component.html',
  styleUrls: ['./import-export.component.css'],
  providers: []
})
export class ImportExportComponent implements OnInit {

  constructor(
    public ipmortExportService: IpmortExportService,
    public todoService: TodoService,
  ) { }

  ngOnInit() {
  }

}
