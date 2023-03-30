// import { Itemtodo } from './../interface/itemtodolist';
import { IpmortExportService } from '../service/import-export';
import { Component, OnInit, Output } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { SendingtheobservedService } from '../service/sendingtheobserved.service';
import { from, map, Observable, of } from 'rxjs';
import { Itemtodo } from '../interface/itemtodolist';
import { SelectPipe } from '../pipe/select.pipe';

// import * as fs from 'node:fs';
// JSON
// import * as todolistjson from '../../assets/json/todolistjson.json';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})

export class TodolistComponent implements OnInit {

  inputText: string = ''
  // mytodolistjson: any

  // newdata = [
  //   {
  //     id: '123',
  //     text: '123',
  //     date: '123',
  //     completed: false
  //   },
  //   {
  //     id: '456456',
  //     text: '456456',
  //     date: '465456',
  //     completed: true
  //   }
  // ]

  constructor(
    public todoService: TodoService,
    public ipmexService: IpmortExportService,
    public sendingtheobservedService: SendingtheobservedService
  ) { }
  
  ngOnInit(): void {

    // JSON
    // this.mytodolistjson = (todolistjson as any).default;
    // this.mytodolistjson = this.newdata
    // console.log(this.mytodolistjson)

    //selector
    this.todoService.createSelectArray()

    //loading
    setTimeout(() => {
      this.todoService.loading = false
    }, 700);

    //async
    // this.GetObservable()

    /*     this.dataObservable.subscribe((res: any) => {
          console.log(res)
        }, (error: any) => {
          console.log("error.massage")
        }, () => {
          console.log("Comlpeted")
        }) */

    // this.pull()

    /*     this.todoListobs$.subscribe((sub: any) => {
          console.log(sub)
          // console.log(res)
        }, (error: any) => {
          console.log("error.massage")
        }, () => {
          console.log("Comlpeted")
        }) */
        

  }

  addTask() {
    if (this.inputText) {
      this.todoService.addTask(this.inputText)
      this.inputText = ''
    }
  }

  //selector
  completed = [
    { key: 'All', status: 'All' },
    { key: 'Actual', status: 'Actual' },
    { key: 'Completed', status: 'Completed' }
  ]

  //filter
  filter = ''

  //async
  /*   change(status: string) {
      this.selected = status
    } */

  /*   changeSelect(event: any) {
      // console.log(event.target.value)
      return this.selected = event.target.value
    } */

  // todolistTimeout:any = []

  /*   subscription = this.todoService.todolistTimeout$.subscribe((sub) => {
      // console.log(sub)
      this.todolistTimeout = sub
    }) */

  /*   stream$ = this.todoService.todoListObs$.subscribe({
      next: v => console.log(v)
    }) */

  /*   stream$ = this.todoService.arr$.subscribe({
      next: v => console.log(v),
      // complete: () => console.log('Complete')
    }) */

  // arr$ = from(this.todoService.todoList)
  // todostream = this.arr$.subscribe(sub => console.log(sub))

  // todolistTimeout:any = this.todoService.todolistTimeout$.subscribe(sub => this.todolistTimeout = sub)

}

