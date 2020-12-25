import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesServices } from 'src/app/services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes:Heroe[] = []
  terminoBuscador:string = '';

  constructor(private _router: Router, private _activateRoute:ActivatedRoute, private _heroesServices:HeroesServices) { 
  }

  ngOnInit(): void {
    this._activateRoute.params.subscribe(params => {
      this.terminoBuscador = params.termino;
      this.heroes = this._heroesServices.buscarHeroe(params.termino);
    })
  }

  verHeroe(index:number) {
    this._router.navigate(['/heroe', index]);
  }
}
