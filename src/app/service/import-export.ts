import { Injectable, OnInit } from '@angular/core';
import { FileSaverService } from 'ngx-filesaver';
import { TodoService } from './todo.service';
import * as XLSX from 'xlsx';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class IpmortExportService implements OnInit {

  constructor(
    private fileSaverService: FileSaverService,
    private todoService: TodoService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  fileName: any

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  uploadList(event: any) {

    let file = event.target.files[0]

    this.fileName = file.name;

    let fileUpload = new FileReader()

    fileUpload.readAsBinaryString(file)

    fileUpload.onload = (e) => {
      var workBook = XLSX.read(fileUpload.result, { type: 'binary' })
      var sheetNames = workBook.SheetNames

      let todoListImport: any[] = []

      todoListImport = XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]])

      for (let i = 0; i < todoListImport.length; i++) {
        // formatDate(value: string | number | Date, format: string, locale: string, timezone?: string): string

        this.todoService.todoList[i] = {
          id: todoListImport[i].id,
          text: todoListImport[i].text,
          date: new Date(Date.UTC(
            todoListImport[i].date.slice(6, 10), todoListImport[i].date.slice(3, 5) - 1, todoListImport[i].date.slice(0, 2),
            todoListImport[i].date.slice(12, 14) - Number(new Date().toTimeString().slice(13, 15)), todoListImport[i].date.slice(15, 17), todoListImport[i].date.slice(18, 20))
          ),
          completed: todoListImport[i].completed,
        }

      }

    }

  }

  selectStartDate = new Date()
  selectEndDate = new Date()

  downloadListSelected() {

    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

    const todoListExport: any[] = []

    const raw = this.todoService.todoList.filter(item => {
      const itemDate = new Date(item.date)

      if (itemDate.getFullYear() >= this.selectStartDate.getFullYear() && itemDate.getFullYear() <= this.selectEndDate.getFullYear()) {
        if (itemDate.getMonth() >= this.selectStartDate.getMonth() && itemDate.getMonth() <= this.selectEndDate.getMonth()) {
          if (itemDate.getDate() >= this.selectStartDate.getDate() && itemDate.getDate() <= this.selectEndDate.getDate()) {
            // return item
            todoListExport.push(item)
          }
        }
      }
      return null
    })

    const todoListExportDataString: any[] = []

    for (let i = 0; i < todoListExport.length; i++) {
      todoListExportDataString[i] = {
        id: todoListExport[i].id,
        text: todoListExport[i].text,
        date: todoListExport[i].date.toLocaleString(),
        completed: todoListExport[i].completed,
      }
    }

    const worksheet = XLSX.utils.json_to_sheet(todoListExportDataString)

    const workBook = {
      Sheets: {
        'My tasks': worksheet
      },
      SheetNames: ['My tasks']
    }

    const excelBuffer = XLSX.write(workBook, { bookType: 'xlsx', type: 'array' })

    const blobData = new Blob([excelBuffer], { type: EXCEL_TYPE })

    if (todoListExportDataString.length) {
      this.fileSaverService.save(blobData, "Tasks for selected days")
    } else {
      this.openSnackBar('No tasks these days', 'OK')
    }
  }

  downloadList() {

    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

    const todoListExportDataString: any[] = []

    for (let i = 0; i < this.todoService.todoList.length; i++) {
      todoListExportDataString[i] = {
        id: this.todoService.todoList[i].id,
        text: this.todoService.todoList[i].text,
        date: this.todoService.todoList[i].date.toLocaleString(),
        completed: this.todoService.todoList[i].completed,
      }
    }

    const worksheet = XLSX.utils.json_to_sheet(todoListExportDataString)

    const workBook = {
      Sheets: {
        'My tasks': worksheet
      },
      SheetNames: ['My tasks']
    }

    const excelBuffer = XLSX.write(workBook, { bookType: 'xlsx', type: 'array' })

    const blobData = new Blob([excelBuffer], { type: EXCEL_TYPE })

    if (todoListExportDataString.length) {
      this.fileSaverService.save(blobData, "Full tasklist")
    } else {
      this.openSnackBar('No tasks', 'OK')
    }

  }

}
