import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarroCard } from './carro-card/carro-card';

interface Carro {
  marca: string;
  referencia: string;
  modelo: null | number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [CommonModule, FormsModule, CarroCard],
})
export class App {
  titulo: string = 'Ejercicio 1';
  fechaActual = new Date();

  Ejercicio2: string = '2. Lista de productos usando FOR';
  Ejercicio3: string =
    '3. Usando un IF y un boton se permite ocultar o mostrar la lista de productos del punto 2';
  items: Carro[] = [
    { marca: 'Toyota', referencia: 'Corolla', modelo: 2020 },
    { marca: 'Ford', referencia: 'Focus', modelo: 2018 },
    { marca: 'Chevrolet', referencia: 'Cruze', modelo: 2019 },
    { marca: 'Honda', referencia: 'Civic', modelo: 2021 },
    { marca: 'Nissan', referencia: 'Sentra', modelo: 2022 },
  ];

  nuevoCarro: Carro = {
    marca: '',
    referencia: '',
    modelo: null,
  };

  mostrarListado: boolean = true;
  mostrarOcultarLista() {
    this.mostrarListado = !this.mostrarListado;
  }

  agregarCarro() {
    if (
      this.nuevoCarro.marca &&
      this.nuevoCarro.referencia &&
      this.nuevoCarro.modelo
    ) {
      this.items.push({ ...this.nuevoCarro });
      this.nuevoCarro = { marca: '', referencia: '', modelo: null };
    }
  }
}
