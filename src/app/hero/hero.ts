import {Component} from '@angular/core';


@Component({
    selector:'hero',
    styleUrls:['./hero.css'],
    templateUrl:'./hero.html'
})
export class Hero{
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {}
}
