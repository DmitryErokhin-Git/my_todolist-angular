import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-actual',
  templateUrl: './actual.component.html',
  styleUrls: ['./actual.component.css']
})
export class ActualComponent implements OnInit {

  constructor(
    public todoService: TodoService,
  ) { }

  ngOnInit() {
  }

}
