import { Component } from '@angular/core';
import { materialImports } from '../shared/material/material.imports';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'formulario',
  imports: [...materialImports, ReactiveFormsModule, MatInputModule, ],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {
  miFormulario: FormGroup;


  constructor () { 
    this.miFormulario = new FormGroup({
    nombre: new FormControl('',[Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mensaje: new FormControl('', [Validators.required, Validators.minLength(6)])
  });



}

  onSubmit() {
    console.log(this.miFormulario.value); 

  alert('Registro exitoso');
  this.miFormulario.reset();
}
}

