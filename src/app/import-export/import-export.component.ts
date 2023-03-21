import { TodoService } from './../service/todo.service';
import { IpmexService } from './../service/ipmex.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-import-export',
  templateUrl: './import-export.component.html',
  styleUrls: ['./import-export.component.css']
})
export class ImportExportComponent implements OnInit {

  // jsonData = [
  //   {
  //     "id": 0,
  //     "name": 'Dima',
  //     "text": 'My text'
  //   },
  //   {
  //     "id": 1,
  //     "name": 'Nastia',
  //     "text": 'Her text'
  //   }
  // ]

  constructor(
    public ipmexService: IpmexService,
    public todoService: TodoService
  ) { }

  ngOnInit() {
  }

}
