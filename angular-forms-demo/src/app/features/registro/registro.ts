import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {
  perfil =  new FormGroup({
    nombre: new FormControl('',[Validators.required, Validators.minLength(2)]),
    apellido: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  get nombre() { return this.perfil.get('nombre'); }
get apellido() { return this.perfil.get('apellido'); }
get email() { return this.perfil.get('email'); }    
get password() { return this.perfil.get('password'); }  


enviar() {
  console.log(this.perfil.value);
  alert('Registro exitoso');
  this.perfil.reset();
}

}
