/**
 * Created by zhongzhong on 16/9/3.
 */
import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from "@angular/core";
import {Todo} from "../model/Todo";
@Component({
  selector:'todo-list',
  templateUrl:'./todo-list.html',
  styleUrls:['./todo-list.css'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class TodoList{
  @Input() todos:Todo[];
  @Output() toggle = new EventEmitter<Todo>();
  toggleCompletion(index:number){
    let todo = this.todos[index];
    this.toggle.emit(todo);
    console.info('TodoList toggleCompletion method.');
  }
}
