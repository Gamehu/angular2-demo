import {Component} from '@angular/core';


@Component({
    selector:'hero',
    styleUrls:['./hero.css'],
    templateUrl:'./hero.html'
})
export class Hero{
    id:number;
    name:string;
    heroes:Hero[];
    addHero(hero:Hero){
        console.info(hero);
        this.heroes.push(hero);
    }
}