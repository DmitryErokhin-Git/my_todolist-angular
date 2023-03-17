import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { Itemtodo } from '../interface/itemtodolist';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    // private httpClient: HttpClient
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

  changeComplete(item: Itemtodo) {
    item.completed = !item.completed
    // item.completed ? false : true
  }

  delTask(id: number) {
    this.todoList = this.todoList.filter(item => item.id != id)
  }

  // getJson() {
  //   this.httpClient.get<any>('../service/data.json').subscribe(response => console.log(response))


  // let subscription = this.httpClient.get<RoomList[]>('http://localhost:3000/rooms').subscribe(roomsSub => this.roomList = roomsSub)
  // console.log(a)
  // }



  // метод для отправки POST-запроса и добавления нового объекта в JSON
  // addToJson(newData: any): Observable<any> {
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json');
  //   return this.httpClient.post<any>('../service/data.json', newData, { headers });
  // }
}
