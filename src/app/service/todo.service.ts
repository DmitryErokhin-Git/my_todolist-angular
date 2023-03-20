import { Injectable } from '@angular/core';
import { Itemtodo } from '../interface/itemtodolist';
// import { SavetolocalstorageService } from './savetolocalstorage.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    // private savetolocalstorageService: SavetolocalstorageService
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
      text: inputText.trim(),
      date: new Date(),
      completed: false
    }
    this.todoList.push(item)
    this.saveLocal()
    // const saveJson = JSON.stringify(this.todoService.todoList)
    // console.log(saveJson)
    // localStorage.setItem('todoList', saveJson)
  }

  changeComplete(item: Itemtodo) {
    item.completed = !item.completed
    this.saveLocal()
  }

  delTask(id: number) {
    this.todoList = this.todoList.filter(item => item.id != id)
    // this.savetolocalstorageService.saveLocal()
    this.saveLocal()
  }


  saveLocal() {
    const saveJson = JSON.stringify(this.todoList)
    // console.log(saveJson)
    localStorage.setItem('todoList', saveJson)
    // console.log(localStorage.getItem('todoList'))
    // this.loadLocal()
  }

  loadLocal() {
    const loadJson: any = localStorage.getItem('todoList')
    // console.log(loadJson)
    this.todoList = JSON.parse(loadJson)
    // console.log(this.data)

    // window.addEventListener('storage', event => {
    //   console.log(event)
    // })
  }

  cleanLocal() {
    this.todoList = []
    this.saveLocal()
  }
}
