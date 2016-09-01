import { Component }   from '@angular/core';
import { Hero }        from './hero';
import { HeroService } from './hero.service';
@Component({
  selector: 'hero-list',
  templateUrl:'./hero-list.html'
})
export class HeroListComponent {
  heroes: Hero[];
  constructor(heroService: HeroService) {
    this.heroes = heroService.getHeroes();
  }
}