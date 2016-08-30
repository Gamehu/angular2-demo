//从核心模块导入Component，这一点实际上非常恶心，这种内核模块默认就应该可以用的，应该像java.lang包那样，默认加载，无需程序员声明
import {Component} from '@angular/core';

//采用注解的方式来定义组件，注解是给编译器看的
@Component({
  selector   : 'app',			//回去查找页面里面的<app>标签
  styleUrls: ['./app.css'],		//引用外部样式
  templateUrl: './app.html',	//外置的独立模板，复杂的模板外置更便于以后维护
})

/**
 * AppComponet是根组件，这个组件是直接渲染在body标签里面的，可以类比Extjs里面的ViewPort
 */
export class AppComponent {
}
