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

  // uploadList(event: any) {

  //   let file = event.target.files[0]

  //   let fileUpload = new FileReader()

  //   fileUpload.readAsBinaryString(file)

  //   fileUpload.onload = (e) => {
  //     var workBook = XLSX.read(fileUpload.result, { type: 'binary' })
  //     var sheetNames = workBook.SheetNames
  //     console.log(workBook)
  //     this.todoService.todoList = XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]])
  //   }
  // }

  // date = new Date().toString()

  downloadList() {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    // const EXCEL_EXTENSION = '.xlsx';

    const worksheet = XLSX.utils.json_to_sheet(this.todoService.todoList)

    const workBook = {
      Sheets: {
        'My tasks': worksheet
      },
      SheetNames: ['My tasks']
    }

    const excelBuffer = XLSX.write(workBook, { bookType: 'xlsx', type: 'array' })

    const blobData = new Blob([excelBuffer], { type: EXCEL_TYPE })

    this.fileSaverService.save(blobData, "Task list")
  }
}
