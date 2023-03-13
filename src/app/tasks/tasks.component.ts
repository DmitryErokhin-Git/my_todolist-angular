import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  
  @Output() OnToggle = new EventEmitter<number>()

  constructor(public todoService: TodoService) { }

  ngOnInit() {
  }
  
  onChange(id: number) {
    this.OnToggle.emit(id)
  }
}
