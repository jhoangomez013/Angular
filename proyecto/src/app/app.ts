import { Component } from '@angular/core';
import { PracticaComponente }  from './practica-componente/practica-componente';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PracticaComponente, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  saludo = "Hola";
  esActivo: boolean = true;
  tieneError: boolean = false;

  color: string = 'red';
  fontSize: string = '20px';

  usuarioActivo: boolean = true;
}