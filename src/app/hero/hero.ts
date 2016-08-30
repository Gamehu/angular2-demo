import {Component} from '@angular/core';


@Component({
    selector:'hero',
    styleUrls:['./hero.css'],
    templateUrl:'./hero.html'
})
export class Hero{
    id:number;
    name:string;
    items:string[];
    constructor(){
        this.items = ['First Hero','Liu Bang'];
    }
}