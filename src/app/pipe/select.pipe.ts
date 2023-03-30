import { Pipe, PipeTransform } from '@angular/core';
import { Itemtodo } from '../interface/itemtodolist';

@Pipe({
  name: 'select'
})
export class SelectPipe implements PipeTransform {

  transform(todolist: Itemtodo[], select?: string | undefined): Itemtodo[] {

    if (select == 'Actual') {
      return todolist.filter(item => { return item.completed == false })
    }
    if (select == 'Completed') {
      return todolist.filter(item => { return item.completed == true })
    }
    return todolist
  }
}

