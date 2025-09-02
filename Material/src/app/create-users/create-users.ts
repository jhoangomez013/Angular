import {  CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../core/services/user.service';



@Component({
  selector: 'app-create-users',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-users.html',
  styleUrl: './create-users.css'
})
export class CreateUsers {
  private usersService = inject(UserService);
 fb= new FormBuilder();
  form= this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    username: ['', Validators.required]
  });

  creating = false;
  message = '';

  onCreate() {
    if (this.form.invalid) {
      this.message = 'Form is invalid';
      return;
    }
    this.creating = true;
    this.message = '';
   
     this.usersService.createUser(this.form.getRawValue()).subscribe({
      next: (user) => {
        this.creating = false;
        this.message = `Creado ${user.name} (${user.email})`;
        this.form.reset();
      },
      error: (err) => {
        this.creating = false;
        this.message = `Error creando usuario: ${err.message}`;
      }
    });
  }
}
