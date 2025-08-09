import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carro-card',
  imports: [],
  templateUrl: './carro-card.html',
  styleUrl: './carro-card.css'
})
export class CarroCard {

  @Input () Carro: any;
}
