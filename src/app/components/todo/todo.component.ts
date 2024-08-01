import { Component, Input,  OnInit } from '@angular/core';
import { IToDo } from '../../models/todo.interface';

import { JsonPipe } from '@angular/common';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [JsonPipe, MaterialModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{
  private _todo: IToDo
  @Input() set todo(todo: IToDo)
  {
    this._todo=todo
    console.log(todo)
  }
  get todo():IToDo
  {
    return this._todo
  }
  constructor()
  {

  }

  
  
  ngOnInit(): void {
   
   
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
