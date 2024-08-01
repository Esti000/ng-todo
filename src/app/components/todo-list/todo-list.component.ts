import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class TodoListComponent implements OnInit, OnDestroy{
  
  public todos: Array<IToDo>=[];
 private subscription: Subscription=new Subscription()
  constructor(private todoservice:TodoService)
  {
    
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  ngOnInit(): void {
    this.subscription.add(
      this.todoservice.getTodos().subscribe( data=> {
        console.log(data)
        this.todos=data})
     )
    
  }
}
