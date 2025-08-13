import { Component, signal } from '@angular/core';
import { Registro } from "./features/registro/registro";



@Component({
  selector: 'app-root',
  imports: [Registro],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'angular-forms-demo';
}
