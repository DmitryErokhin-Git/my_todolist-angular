import { Injectable } from '@angular/core';
import { FileSaverService } from 'ngx-filesaver';
import { TodoService } from './todo.service';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class IpmexService {

  constructor(
    private fileSaverService: FileSaverService,
    private todoService: TodoService
  ) { }

  uploadList() {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    // const EXCEL_EXTENSION = '.xlsx';

    const worksheet = XLSX.utils.json_to_sheet(this.todoService.todoList)

    const workbook = {
      Sheets: {
        'testSheet': worksheet
      },
      SheetNames: ['testSheet']
    }

    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })

    const blobData = new Blob([excelBuffer], { type: EXCEL_TYPE })
    this.fileSaverService.save(blobData, "Task list")
  }
}
