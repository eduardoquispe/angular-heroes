import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesServices } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = []

  constructor( private _heroesService:HeroesServices, private _router:Router ) { 

  }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe(index:number) {
    this._router.navigate(['/heroe', index]);
  }

}
