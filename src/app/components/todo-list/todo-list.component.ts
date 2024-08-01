import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { IToDo } from '../../models/todo.interface';
import { TodoService } from '../../services/todo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit{
  
  @Input() todos: Array<IToDo>=[];
 
  constructor(private todoservice:TodoService)
  {
    
  }


  ngOnInit(): void {
   
  }
  public onTodoClick(todo :IToDo, index:number)
  {
    this.todoservice.setSelectedTodo(todo);
    this.todos.forEach(todo=>
    {
      if(todo.selected==true)
        todo.selected=false
    }
    )  
    this.todos[index].selected=true

  }
}
