import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { IToDo } from '../../models/todo.interface';
import { Subscription } from 'rxjs';

import { JsonPipe } from '@angular/common';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [JsonPipe, MaterialModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit, OnDestroy{
  public todo:IToDo;

  private subscription:Subscription=new Subscription()
  constructor(private todoService: TodoService)
  {

  }
  ngOnDestroy(): void {
   
    this.subscription.unsubscribe();
  }
  
  
  ngOnInit(): void {
    this.subscription.add(
      this.todoService.getSelectedTodo().subscribe(data=>{
        this.todo=data;
      })
    )
   
  }

  public oncomplateTodo(todo:IToDo): void
  {
    todo.isComplited=true;
   
  }
  public onisArchivedTodo(todo:IToDo): void
  {
    
    // this.todoService.setSelectedTodo(todo)
    todo.isArchived=true;
   
  }

}
