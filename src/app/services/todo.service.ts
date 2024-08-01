import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IToDo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
// private mock: IToDo[]=[
//     {"id":1,"title":"Boa, malagasy ground","description":"Acrantophis madagascariensis","isArchived":false,"endDate":"2/2/2024","isComplited":false, "selected":true},
// {"id":2,"title":"Magistrate black colobus","description":"Colobus guerza","isArchived":false,"endDate":"3/23/2024","isComplited":false,  "selected":false},
// {"id":3,"title":"Giant anteater","description":"Myrmecophaga tridactyla","isArchived":false,"endDate":"10/20/2023","isComplited":false,"selected":false},
// {"id":4,"title":"Cobra, cape","description":"Naja nivea","isArchived":false,"endDate":"1/1/2024","isComplited":false, "selected":false},
// {"id":5,"title":"Flicker, campo","description":"Colaptes campestroides","isArchived":false,"endDate":"5/14/2024","isComplited":false, "selected":false},
  // ] 
  private ToDos:IToDo[] | Array<IToDo>=[]
  private _TodoSubject: BehaviorSubject<Array<IToDo>>=new BehaviorSubject(this.ToDos)
  constructor() { }

  private _singleToDoSubject:BehaviorSubject<IToDo>=new BehaviorSubject(this.ToDos.length? this.ToDos[0]:null)

  public getSelectedTodo(): Observable<IToDo>
  {
    return this._singleToDoSubject.asObservable()
  }

  public getTodos(): Observable<Array<IToDo>> 
  {
    if(!this._TodoSubject.value.length)
    {
      if (typeof localStorage === "undefined" || localStorage === null) {
        var LocalStorage = require('node-localstorage').LocalStorage;
        localStorage = new LocalStorage('./scratch');
    }
      const todosString= localStorage.getItem("todos")?localStorage.getItem("todos"):null
    //  console.log(localStorage['todos'], todosString)
      if(todosString)
      {
        const existingTodos=JSON.parse(todosString)
        this._TodoSubject.next(existingTodos);
      }
    }
    return this._TodoSubject.asObservable()
  }

  public setSelectedTodo(todo:IToDo)
  {
    this._singleToDoSubject.next(todo)
  }
  public addNewToDo(newTodo:IToDo): void
  {
    console.log(newTodo.id)
    // אני מחזיקה את מערך האובסרבבל כי רק כך הקומפוננטוט יוכלו לתקשר איתו ואליו אני מוסיפה
    const ExitlistOfToDo: Array<IToDo> =this._TodoSubject.value;
    ExitlistOfToDo.push(newTodo)
    this._TodoSubject.next(ExitlistOfToDo)
    localStorage.setItem("todos",JSON.stringify(ExitlistOfToDo) )
    console.log(localStorage['todos'])
  }
}
