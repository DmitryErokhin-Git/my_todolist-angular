import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import * as todolistjson from '../../assets/todolistjson.json';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})

export class TodolistComponent implements OnInit {

  inputText: string = ''
  mytodolistjson: any

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
  ) { }

  ngOnInit(): void {
    // this.mytodolistjson = (todolistjson as any).default;
    // this.mytodolistjson = this.newdata
    // console.log(this.mytodolistjson)
  }

  addTask() {
    if (this.inputText) {
      this.todoService.addTask(this.inputText)
      this.inputText = ''
    }
  }

  completed = [
    { key: 'All', status: 'all' },
    { key: 'Actual', status: 'Actual' },
    { key: 'Completed', status: 'Completed' }
  ]

  selected = 'All'
  filter = ''

  // changeSelect(event: any) {
  //   // console.log(event.target.value)
  //   return this.selected = event.target.value
  // }
}
