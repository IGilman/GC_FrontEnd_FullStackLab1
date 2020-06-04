import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
//this auto got added when the ng form was getting written out
import { NgForm } from '@angular/forms';
import { TodoserService } from '../todoser.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  showIndex: number = null;

  constructor(private service: TodoserService) { }

  ngOnInit(): void {
    this.getAllTodos();
  }

  getAllTodos(): void {
    this.service.getAllTodos().subscribe((response) => {
      this.todos = response;
      console.log(response)
    })
  }

  addTodo(form: NgForm): void {
    this.service.addTodo(form.value).subscribe(() => {
      this.getAllTodos();
      form.reset();
    });
  };

  deleteTodo(id: number): void {
    this.service.deleteTodo(id).subscribe(() => {
      this.getAllTodos();
    });
  };


  //I didn't figure out the put/clicking the completed button
  completedTodo(item: Todo) {
    let completedTask = item;
    completedTask.completed = true;
    this.service.updateTodo(item.id, completedTask).subscribe(() => {
      this.getAllTodos();
    });
    this.showIndex = null;
  };


}
