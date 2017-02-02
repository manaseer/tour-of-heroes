import {Component, Input} from '@angular/core'

@Component({
    selector:'my-hero-count',
    template:`
        <h3>{{count}}</h3>
    `
})

export class HeroCount{
    @Input()
        count: number;
}