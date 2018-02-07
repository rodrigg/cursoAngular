import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/todo';

@Pipe({
  name: 'terminadosTodos',
  pure:false
})
export class TerminadosTodosPipe implements PipeTransform {

  transform(todos: Todo[]): Todo[] {
    return todos.filter(todo=>todo.terminado);
  }

}
