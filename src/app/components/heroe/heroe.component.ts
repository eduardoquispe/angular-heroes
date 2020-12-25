import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesServices } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ["./heroe.component.css"]
})
export class HeroeComponent {

  heroe:any = {};

  constructor(private _activateRoute:ActivatedRoute, private _heroesService:HeroesServices) { 
    this._activateRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe(params.id);
    })
  }
}
