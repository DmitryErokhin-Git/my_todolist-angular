import { SelectPipe } from './../pipe/select.pipe';
import { Injectable, Input, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
import { Itemtodo } from '../interface/itemtodolist';
// import { SavetolocalstorageService } from './savetolocalstorage.service';
import { from, Observable, of } from 'rxjs'
import { stream } from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class TodoService implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  todoList: Itemtodo[] = [
    {
      id: 1679915426658,
      text: 'string',
      date: new Date(),
      completed: false
    },
    {
      id: 1679915426659,
      text: 'string string',
      date: new Date(),
      completed: true
    }
  ]

  addData = new Date()

  addTask(inputText: string) {
    const item: Itemtodo = {
      id: Date.now(),
      text: inputText.trim(),
      // date: new Date(),
      date: this.addData,
      completed: false
    }
    this.todoList.push(item)
    // this.saveLocal()
    this.createSelectArray()
  }

  changeComplete(item: Itemtodo) {
    item.completed = !item.completed
    // this.saveLocal()
    this.createSelectArray()
  }

  delTask(id: number) {
    this.todoList = this.todoList.filter(item => item.id != id)
    // this.savetolocalstorageService.saveLocal()
    // this.saveLocal()
    this.createSelectArray()
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
    // this.saveLocal()
  }

  arr$ = of(this.todoList)

  todoListObs$ = new Observable((observer: any) => {

    for (let i = 0; i < this.todoList.length; i++) {
      // setTimeout(() => { observer.next(this.todoList[i]) }, 1000 * i);
      observer.next(this.todoList[i])
    }
  })


  // todolistTimeout$ = new Observable((observ) => {
  //   observ.next(this.loading = true)
  //   setTimeout(() => { observ.next(this.loading = false) }, 1500)
  //   setTimeout(() => { observ.next(this.todoList) }, 1500)
  //   setTimeout(() => { observ.complete() }, 1500)
  // })

  loading = true

  selected = 'All'

  selectPipe = new SelectPipe();
  selectedArr: any[] = []

  createSelectArray() {
    this.selectedArr = this.selectPipe.transform(this.todoList, this.selected);
  }
}
