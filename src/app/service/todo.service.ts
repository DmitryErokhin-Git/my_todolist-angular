import { Injectable } from '@angular/core';
import { Itemtodo } from '../interface/itemtodolist';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
  ) { }

  todoList: Itemtodo[] = [
    /*     {
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
        } */
  ]

  addTask(inputText: string) {
    const item: Itemtodo = {
      id: Date.now(),
      text: inputText,
      date: new Date(),
      completed: false
    }
    this.todoList.push(item)
  }

  // changeComplete(item: Itemtodo) {
  //   item.completed = !item.completed
  // }

  delTask(id: number) {
    this.todoList = this.todoList.filter(item => item.id != id)
  }
}
