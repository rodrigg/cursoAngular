import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo:Todo=new Todo("",false,false,"") ;
  todos:Todo[]=[];
  constructor() { }

  ngOnInit() {
   
  }
  agregarTodo(){
    const  todoItem=new Todo(this.todo.nombre,this.todo.importante,this.todo.terminado,this.todo.color);
    this.todos.push(todoItem);
  }
  agregarClases(itemTodo:Todo){
    let clases={importante:itemTodo.importante,terminado:itemTodo.terminado};
  return clases
  }
}
