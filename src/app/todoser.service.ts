import { Injectable } from '@angular/core';
import { Todo } from './interfaces/todo';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class TodoserService {

  todoURL: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getAllTodos(): any {
    return this.http.get(`${this.todoURL}/todo`)
  }

  addTodo(item: Todo): any {
    return this.http.post(`${this.todoURL}/todo`, item)
  }

  deleteTodo(id: number): any {
    return this.http.delete(`${this.todoURL}/todo/${id}`)
  }

  //I didn't figure out the put/clicking the completed button
  updateTodo(id: number, item: Todo): any {
    console.log("service")
    return this.http.put(`${this.todoURL}/todo/${id}`, item)
  }

}
