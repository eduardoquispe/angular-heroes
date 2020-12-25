import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number = 0;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor() {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe() {
    if(!this.heroe.index) {
      this.heroeSeleccionado.emit(this.index);
    } else {
      this.heroeSeleccionado.emit(this.heroe.index);
    }
  }

}
