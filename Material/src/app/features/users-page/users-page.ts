import { CommonModule } from '@angular/common';
import { Component, inject  } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { map, Observable, of, tap } from 'rxjs';
import { catchError, startWith } from 'rxjs';
import { User } from '../../core/models/user';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

export interface Vm {
  loading: boolean;
  data: User[];
  error?: string;
}

@Component({
  selector: 'app-users-page',
  imports: [CommonModule, MatCardModule, MatListModule, MatIconModule],
  templateUrl: './users-page.html',
  styleUrl: './users-page.css'
})
export class UsersPage  {
  private usersService= inject(UserService);

vm$: Observable<Vm> = this.usersService.getUsers().pipe(
  map((data) => {
    return { loading: false, data } as Vm;
  }),
  startWith({ loading: true, data: [] } as Vm),
  catchError((error) => of({ loading: false, data: [], error: error.message } as Vm))
);


}
