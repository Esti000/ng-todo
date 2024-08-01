import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoContainerComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDo-app';

}
