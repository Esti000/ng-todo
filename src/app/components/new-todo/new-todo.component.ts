import { Component,  ViewChild } from '@angular/core';
import {  NgForm, NgModel, NgModelGroup } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { IToDo } from '../../models/todo.interface';
import { TodoService } from '../../services/todo.service';
import { MatDialog } from '@angular/material/dialog';
import {v4 as uuidv4} from 'uuid'

@Component({
  selector: 'app-new-todo',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './new-todo.component.html',
  styleUrl: './new-todo.component.css'
})
export class NewTodoComponent {
@ViewChild("f") form: NgForm
constructor(public matDialog: MatDialog, private todoservice:TodoService)
{

}
 public onNewTodoSubmit(): void{
  // create the new todo object
  // send object to service
  if(this.form.valid){
  const formvalue=this.form.form.value
  const newTodo: IToDo={
    id:uuidv4(),
    title:formvalue.title,
    description:formvalue.description,
    endDate:formvalue.date,
    isArchived:false,
    isComplited:false,
    selected:false

  }
  this.todoservice.addNewToDo(newTodo)
  this.matDialog.closeAll()
 
   }
 }
}
