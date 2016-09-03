import {Input, Output, EventEmitter, Component} from "@angular/core";
/**
 * Created by zhongzhong on 16/9/3.
 */
@Component({
  selector:'text-input',
  templateUrl:'./text-input.html'
})
export class InputBox {
  @Input() inputPlaceholder: string;
  @Input() buttonLabel: string;

  @Output() inputText = new EventEmitter<string>();

  emitText(text:string){
    this.inputText.emit(text);
  }
}
