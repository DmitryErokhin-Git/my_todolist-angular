import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { Router } from '@angular/router';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  // @Output() onToggle = new EventEmitter<number>()

  constructor(
    public todoService: TodoService,
    // private router: Router
  ) { }

  ngOnInit() {
  }

  // onChange(id: number) {
  //   this.onToggle.emit(id)
  // }

  // dynamicRouter() {
  //   this.router.navigate(['/tasks'])
  // }

}
