/**
 * Created by zhongzhong on 16/9/3.
 */
import {Component} from "@angular/core";
import {InputBox} from "./input-box/input-box";
import {TodoList} from "./todo-list/todo-list";
import {Todo} from "./model/todo";

@Component({
  selector: 'todo-app',
  directives: [TodoList, InputBox],
  templateUrl: './todo-app.html'
})
export class TodoApp {
  todos: Todo[] = [];
  name: string = 'John';

  addTodo(label: string) {
    this.todos.push({label, completed: false});
  }

  toggleCompletion(todo: Todo) {
    todo.completed = !todo.completed;
  }
}
