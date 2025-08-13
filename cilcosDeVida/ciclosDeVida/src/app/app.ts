import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CiclosV } from './ciclos-v/ciclos-v';

@Component({
  selector: 'app-root',
  imports: [CommonModule, CiclosV],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'ciclosDeVida';
  mostrarCiclosV = true;

  toggleCiclosV(): void {
     console.log('Toggle CiclosV llamado');
    this.mostrarCiclosV = !this.mostrarCiclosV;
  }
}