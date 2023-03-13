import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})

export class TodolistComponent implements OnInit {

  @Output() OnToggle = new EventEmitter<number>()

  inputText: string = ''

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
  }

  addTask() {
    this.todoService.addTask(this.inputText)
    this.inputText = ''
  }

  // changeComplete(item: Itemtodo) {
  //   this.todoService.changeComplete(item)
  // }

  onChange(id: number) {
    this.OnToggle.emit(id)
  }

  // delTask(id: number) {
  //   this.todoService.delTask(id)
  // }
}
