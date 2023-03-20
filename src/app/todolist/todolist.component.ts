import { Component } from '@angular/core';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})

export class TodolistComponent  {

  inputText: string = ''

  constructor(
    public todoService: TodoService,
  ) { }

  addTask() {
    if (this.inputText) {
      this.todoService.addTask(this.inputText)
      this.inputText = ''
    }
  }

}
