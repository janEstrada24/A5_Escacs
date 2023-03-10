import { Component } from '@angular/core';
import { Equip } from '../../models/Entities/Implementation/Equip';
import { Jugador } from '../../models/Entities/Implementation/Jugador';

@Component({
  selector: 'app-entrar-equips',
  templateUrl: './entrar-equips.component.html',
  styleUrls: ['./entrar-equips.component.css']
})
export class EntrarEquipsComponent {
  equip: Equip = new Equip('', 0);
  jugador1: Jugador = new Jugador('');
  jugador2: Jugador = new Jugador('');

  constructor() { }

  crearEquip() {
    this.equip.jugadors.push(this.jugador1);
    this.equip.jugadors.push(this.jugador2);
    console.log(this.equip);
  }
}
