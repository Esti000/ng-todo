import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IToDo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
private mock: IToDo[]=[
    {"id":1,"title":"Boa, malagasy ground","description":"Acrantophis madagascariensis","isArchived":false,"endDate":"2/2/2024","isComplited":false, "selected":true},
{"id":2,"title":"Magistrate black colobus","description":"Colobus guerza","isArchived":false,"endDate":"3/23/2024","isComplited":false,  "selected":false},
{"id":3,"title":"Giant anteater","description":"Myrmecophaga tridactyla","isArchived":false,"endDate":"10/20/2023","isComplited":false,"selected":false},
{"id":4,"title":"Cobra, cape","description":"Naja nivea","isArchived":false,"endDate":"1/1/2024","isComplited":false, "selected":false},
{"id":5,"title":"Flicker, campo","description":"Colaptes campestroides","isArchived":false,"endDate":"5/14/2024","isComplited":false, "selected":false},
  ] 

  private _TodoSubject: BehaviorSubject<Array<IToDo>>=new BehaviorSubject(this.mock)
  constructor() { }

  private _singleToDoSubject:BehaviorSubject<IToDo>=new BehaviorSubject(this.mock[0])

  public getSelectedTodo(): Observable<IToDo>
  {
    return this._singleToDoSubject.asObservable()
  }

  public getTodos(): Observable<Array<IToDo>> 
  {
    return this._TodoSubject.asObservable()
  }

  public setSelectedTodo(todo:IToDo)
  {
    this._singleToDoSubject.next(todo)
  }
}
