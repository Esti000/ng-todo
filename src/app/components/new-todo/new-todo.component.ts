import { Component,  ViewChild } from '@angular/core';
import { Form, NgForm, NgModel, NgModelGroup } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-new-todo',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './new-todo.component.html',
  styleUrl: './new-todo.component.css'
})
export class NewTodoComponent {
@ViewChild("f") form: Form
 public onNewTodoSubmit(): void{
  console.log("On submit")
  console.log(this.form)

 }
}
