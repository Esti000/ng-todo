import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IToDo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
private mock: IToDo[]=[
    {"title":"Boa, malagasy ground","description":"Acrantophis madagascariensis","isArchived":false,"endDate":"2/2/2024","isComplited":true},
{"title":"Magistrate black colobus","description":"Colobus guerza","isArchived":true,"endDate":"3/23/2024","isComplited":false},
{"title":"Giant anteater","description":"Myrmecophaga tridactyla","isArchived":true,"endDate":"10/20/2023","isComplited":true},
{"title":"Cobra, cape","description":"Naja nivea","isArchived":true,"endDate":"1/1/2024","isComplited":false},
{"title":"Flicker, campo","description":"Colaptes campestroides","isArchived":false,"endDate":"5/14/2024","isComplited":true},
  ]

  private _TodoSubject: BehaviorSubject<Array<IToDo>>=new BehaviorSubject(this.mock)
  constructor() { }

  public getTodos(): Observable<Array<IToDo>> 
  {
    return this._TodoSubject.asObservable()
  }
}
