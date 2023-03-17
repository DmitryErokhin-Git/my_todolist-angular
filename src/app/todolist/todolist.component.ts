import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { Router } from '@angular/router';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})

export class TodolistComponent implements OnInit {

  // @Output() onToggle = new EventEmitter<number>()

  inputText: string = 'Task text'

  constructor(
    public todoService: TodoService,
    // private router: Router
  ) { }

  ngOnInit(): void {
  }

  addTask() {
    if (this.inputText) {
      this.todoService.addTask(this.inputText)
      this.inputText = ''
    }
  }

  // changeComplete(item: Itemtodo) {
  //   this.todoService.changeComplete(item)
  // }

  // onChange(id: number) {
  //   this.onToggle.emit(id)
  // }

  // delTask(id: number) {
  //   this.todoService.delTask(id)
  // }

  // dynamicRouter() {
  //   this.router.navigate(['tasks/completed'])
  // }

  // newData = {
  //   name: 'Новый объект',
  //   description: 'Описание нового объекта'
  // };

  // addNewData() {
  //   this.todoService.addToJson(this.newData)
  //     .subscribe(response => console.log(response)); // в случае успеха выводим ответ сервера в консоль
  // }
}
