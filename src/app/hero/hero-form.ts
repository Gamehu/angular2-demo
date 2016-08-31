import {Component} from '@angular/core';

import {Hero} from './hero';

@Component({
    selector:'hero-form',
    templateUrl:'./hero-form.html'
})

export class HeroFormComponent{
    powers = ['闪现','恢复','远程攻击'];

    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
}
