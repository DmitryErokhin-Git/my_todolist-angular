import { Component, OnInit } from '@angular/core';
import { FortodoService } from '../service/fortodo.service';
import { Itemtodo } from '../interface/itemtodolist';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})

export class TodolistComponent implements OnInit {

  constructor(private fortodoService: FortodoService) { }

  // sdf:any = Date.now()
  // ert = new Date()

  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    // console.log(this.sdf)
    // console.log(this.ert)
  }

  // addTask() {
  //   this.fortodoService.addTask()
  // }

  // delTask(i: number) {
  //   this.tasks[i].remove()
  //   this.tasks = this.tasks.filter(item => item.index != i)
  // }

  todolist: Itemtodo[] = [
    {
      id: Date.now(),
      text: 'string',
      date: new Date(),
      completed: false
    },
    {
      id: Date.now(),
      text: 'string string',
      date: new Date(),
      completed: true
    }
  ]

  createItemtodo(inputText: string): Itemtodo {

    const item: Itemtodo = {
      id: Date.now(),
      text: inputText,
      date: new Date(),
      completed: false
    }
    return item
  }

  inputText: string = ''

  addTask(inputText: string) {
    this.todolist.push(this.createItemtodo(inputText))
  }

  changeComplete(item: Itemtodo) {
    item.completed = !item.completed
    // item.completed ? false : true
  }

  delTask(id: number) {
    this.todolist = this.todolist.filter(item => item.id != id)
  }
}
