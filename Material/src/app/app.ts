import { Component } from '@angular/core';
import { materialImports } from './shared/material/material.imports';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
    standalone: true,
  imports: [ ...materialImports,  HttpClientModule, RouterOutlet, RouterModule],
  
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title= 'Angular 2';

}

