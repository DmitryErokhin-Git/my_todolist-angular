import { Injectable } from '@angular/core';
import { FileSaverService } from 'ngx-filesaver';
import { TodoService } from './todo.service';
import * as XLSX from 'xlsx';
import { HttpClient } from '@angular/common/http';
// import * as fs from 'node:fs';

@Injectable({
  providedIn: 'root'
})
export class IpmexService {

  constructor(
    private fileSaverService: FileSaverService,
    private todoService: TodoService,
    // private httpClient: HttpClient
  ) { }

  fileName: any

  uploadList(event: any) {

    let file = event.target.files[0]

    this.fileName = file.name;

    let fileUpload = new FileReader()

    fileUpload.readAsBinaryString(file)

    fileUpload.onload = (e) => {
      var workBook = XLSX.read(fileUpload.result, { type: 'binary' })
      var sheetNames = workBook.SheetNames
      // console.log(workBook)
      this.todoService.todoList = XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]])
    }

    // this.todoService.saveLocal()
    // alert(this.fileName + ' was successfully uploaded')
    // this.todoService.saveLocal()
    // this.todoService.loadLocal()
  }

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

  selectDate = new Date()
  // selectArray: Date[] = []

  downloadListOneDay() {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

    // const oldDate = new Date(this.todoService.todoList[0].date)
    // console.log(oldDate.getDate())
    // console.log(this.todoService.todoList[0].date.getDate())
    // console.log(this.dataDownload.getDate())
    // this.dataDownloadar.push(this.dataDownload)
    // this.dataDownloadar.push(this.dataDownload)
    // console.log(this.dataDownloadar)
    // console.log('dataDownload ' + this.selectDate.getDate())

    const raw = this.todoService.todoList.filter(item => {
      const itemDate = new Date(item.date)
      // console.log('itemDate ' + itemDate.getDate())
      // console.log('selectDate ' + this.selectDate.getDate())

      if (itemDate.getFullYear() == this.selectDate.getFullYear()) {
        if (itemDate.getMonth() == this.selectDate.getMonth()) {
          if (itemDate.getDate() == this.selectDate.getDate()) {

            // console.log(itemDate.getDate() + '    подходит')
            // console.log('selectDate ' + this.selectDate.getDate())
            return item
          }
        }
      }
      return null
    })

    // console.log(raw)

    const worksheet = XLSX.utils.json_to_sheet(raw)

    const workBook = {
      Sheets: {
        'My tasks': worksheet
      },
      SheetNames: ['My tasks']
    }

    const excelBuffer = XLSX.write(workBook, { bookType: 'xlsx', type: 'array' })

    const blobData = new Blob([excelBuffer], { type: EXCEL_TYPE })

    if (raw.length) {
      this.fileSaverService.save(blobData, "Task list")
    } else {
      alert('No tasks on this day')
    }
  }
}
