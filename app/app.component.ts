import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {HeroDetailComponent} from './hero-detail.component';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
	selector: 'my-app',
	template:`<h1>{{title}}</h1>
						<h2>Rock Gods, Bro!</h2>
						<ul class="heroes">
							<li *ngFor="#hero of heroes" 
							    (click)="onSelect(hero)"
							    [class.selected]="hero === selectedHero">
								<span class="badge">{{hero.id}}</span> {{hero.name}}
							</li>
						</ul>
						<my-hero-detail [hero]="selectedHero"></my-hero-detail>`,
	styleUrls: ['app/style/AppComponent.css'],
	directives: [HeroDetailComponent],
	providers: [HeroService],
})

export class AppComponent implements OnInit {
	public title = 'Rock Gods';
	public heroes: Hero[];
	public selectedHero: Hero;

	constructor(private _heroService: HeroService){}

	getHeroes(){
		this._heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	onSelect(hero: Hero) { this.selectedHero = hero; }

	ngOnInit(){
		this.getHeroes();
	}
}