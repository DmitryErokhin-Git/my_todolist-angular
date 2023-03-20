import { Pipe, PipeTransform } from '@angular/core';
import { Itemtodo } from '../interface/itemtodolist';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todolist: Itemtodo[], filter?: string): Itemtodo[] {
    if (!filter?.trim()) {
      return todolist
    }
    return todolist.filter(item => {
      return item.text.toLowerCase().indexOf(filter.toLocaleLowerCase()) != -1
    })
  }

}
