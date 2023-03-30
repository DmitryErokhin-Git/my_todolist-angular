import { TodoService } from './service/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private todoService: TodoService,
  ) { }

  ngOnInit() {

    // this.todoService.loadLocal()

    //синхранизация вкладок

    window.addEventListener('storage', event => {
      // console.log(event)
      const raw: any = event.newValue
      const update: any = JSON.parse(raw)
      this.todoService.todoList = update
      // this.savetolocalstorageService.saveLocal()
      // this.savetolocalstorageService.loadLocal()
    })

  }

  title = 'my todolist angular';

}
