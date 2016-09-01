import {Component} from '@angular/core';
import {HeroService} from './hero.service';

@Component({
    selector:'my-heroes',
    templateUrl:'./heroes-components.html',
    providers:[HeroService]
})
export class HeroesComponent{}