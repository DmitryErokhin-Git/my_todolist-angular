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
      id: 1679915426657,
      text: 'Task №1 is actual',
      date: new Date(),
      completed: false
    },
    {
      id: 1679915426658,
      text: 'Task №2 is compleated',
      date: new Date(),
      completed: true
    }/* ,
    {
      id: 1679915426659,
      text: 'string 3',
      date: new Date(),
      completed: false
    } */
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
    this.saveLocal()
    this.createSelectArray()
  }

  changeComplete(item: Itemtodo) {
    item.completed = !item.completed
    this.saveLocal()
    this.createSelectArray()
  }

  delTask(id: number) {
    this.todoList = this.todoList.filter(item => item.id != id)
    this.saveLocal()
    this.createSelectArray()
  }

  //localstaroge
  saveLocal() {
    const saveJson = JSON.stringify(this.todoList)
    // console.log(saveJson)
    localStorage.setItem('todoList', saveJson)
    // console.log(localStorage.getItem('todoList'))
    // this.loadLocal()
  }

  loadLocal() {
    if (localStorage.getItem('todoList')) {
      const loadJson: any = localStorage.getItem('todoList')
      // console.log(loadJson)
      this.todoList = JSON.parse(loadJson)
      // console.log(this.data)
      this.createSelectArray()
    }
  }

  cleanLocal() {
    this.todoList = []
    this.saveLocal()
    this.createSelectArray()
  }

  loading = true

  //selector
  selected = 'All'

  selectPipe = new SelectPipe();
  selectedArr: Itemtodo[] = []

  createSelectArray() {
    // if (this.todoList.length != 0) {
    this.selectedArr = this.selectPipe.transform(this.todoList, this.selected);
    // }
    // return null
  }

  //async
  // arr$ = of(this.todoList).subscribe(sub => sub)

  /*  todoListObs$ = new Observable((observer: any) => {
 
     for (let i = 0; i < this.todoList.length; i++) {
       // setTimeout(() => { observer.next(this.todoList[i]) }, 1000 * i);
       observer.next(this.todoList[i])
     }
   }) */

  todolistTimeout$ = new Observable((observ) => {
    // observ.next(this.loading = true)
    // setTimeout(() => { observ.next(this.loading = false) }, 700)
    setTimeout(() => { observ.next(this.todoList) }, 700)
    // setTimeout(() => { observ.complete() }, 1500)
  })

}
