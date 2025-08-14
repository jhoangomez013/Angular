import { Component, OnInit } from '@angular/core';
import { PracticaComponente } from './practica-componente/practica-componente';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, PracticaComponente, CommonModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  saludo = "Hola";
  esActivo: boolean = true;
  tieneError: boolean = false;

  color: string = 'red';
  fontSize: string = '20px';

  usuarioActivo: boolean = true;

  colorFavorito = '';

  usuarios: any[] = [];

  constructor(private http: HttpClient) {
    const miObservable = of('Hola', 'Mundo', ':');
    miObservable.subscribe(valor => {
      console.log(valor);
    });
  }

  ngOnInit(): void {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => {
        this.usuarios = data;
        console.log(this.usuarios);
      });
  }
}