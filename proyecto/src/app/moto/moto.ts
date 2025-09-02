import { Component } from '@angular/core';
import { Engine } from '../engine';

@Component({
  selector: 'app-moto',
  imports: [],
  templateUrl: './moto.html',
  styleUrl: './moto.css'
})
export class Moto {

  constructor(private engine: Engine) {   

  }

  conducir() {
    console.log(this.engine.start());
  }

  
}
