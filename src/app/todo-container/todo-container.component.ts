import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { TodoComponent } from "../components/todo/todo.component";
import { TodoListComponent } from "../components/todo-list/todo-list.component";
import { MaterialModule } from '../material/material.module';
import { NewTodoComponent } from '../components/new-todo/new-todo.component';
import { MatDialog } from '@angular/material/dialog';
import { TodoService } from '../services/todo.service';
import { IToDo } from '../models/todo.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-container',
  standalone: true,
  imports: [TodoComponent,NewTodoComponent, TodoListComponent,MaterialModule],
  templateUrl: './todo-container.component.html',
  styleUrl: './todo-container.component.css'
})
export class TodoContainerComponent implements OnInit, OnDestroy{
  private subscription: Subscription= new Subscription();
  
  constructor(public dialog: MatDialog, private todoService: TodoService)
  {
    
  }

  public todo:IToDo
  public todos:IToDo[]
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  ngOnInit(): void {
    this.subscription.add(
      this.todoService.getSelectedTodo().subscribe(data=>{
        this.todo=data;
      })
      
    )
    this.subscription.add(
      this.todoService.getTodos().subscribe( data=> {
        console.log(data)
        this.todos=data})
     )
    
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(NewTodoComponent, {
     
      //  width:'600px',
      //  height:'300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

