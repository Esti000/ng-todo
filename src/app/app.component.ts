import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { HeaderComponent } from './components/header/header.component';
import { TodoComponent } from "./components/todo/todo.component";
import { MatDialog } from '@angular/material/dialog';
import { NewTodoComponent } from './components/new-todo/new-todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, TodoListComponent, TodoListComponent, HeaderComponent, TodoComponent, NewTodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDo-app';

  constructor(public dialog: MatDialog)
  {

  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(NewTodoComponent, {
      width:'250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
