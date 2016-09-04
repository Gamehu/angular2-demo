/**
 * Created by zhongzhong on 16/9/4.
 */
import {Component} from "@angular/core";
import {FORM_DIRECTIVES, FORM_PROVIDERS} from "@angular/common";
import {Developer} from "../model/developer";
import {DeveloperCollection} from "../model/developer_collection";
@Component({
  selector:'dev-add',
  templateUrl:'./add-developer.html',
  styleUrls:['./add-developer.css'],
  directives:[FORM_DIRECTIVES],
  providers:[FORM_PROVIDERS,DeveloperCollection]
})
export class AddDeveloper{
  developer = new Developer();
  errorMessage:string;
  successMessage:string;
  submitted = false;
  technologies:string[] = ['C','C++','C#','Java','PHP'];
  constructor(private developers:DeveloperCollection){}
  addDeveloper(){

  }
}
