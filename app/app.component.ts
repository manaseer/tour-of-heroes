import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
  power: string;
  
}
const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice',power:'' },
  { id: 12, name: 'Narco',power:'' },
  { id: 13, name: 'Bombasto',power:'' },
  { id: 14, name: 'Celeritas',power:'' },
  { id: 15, name: 'Magneta',power:'' },
  { id: 16, name: 'RubberMan',power:'' },
  { id: 17, name: 'Dynama',power:'' },
  { id: 18, name: 'Dr IQ',power:'' },
  { id: 19, name: 'Magma',power:'' },
  { id: 20, name: 'Tornado',power:'' },
];
@Component({
  selector: 'my-app',
  template:`
  <h1>{{title}}</h1>
<div *ngIf="selectedHero">
  <h2>{{selectedHero.name}} details!</h2>
  <div><label>id: </label>{{selectedHero.id}}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="selectedHero.name" placeholder="name"/>
  </div>
</div>
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes" 
      [class.selected]="hero === selectedHero"
      (click)="onSelect(hero)">
      <span class="badge">{{hero.id}}</span><span> {{hero.name}}</span>
    </li>
  </ul>
  `,
styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
    font-weight:bold;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .2em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})
export class AppComponent  {
  selectedHero: Hero;
  title = 'Tour of Heroes';
heroes = HEROES;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

}
