import { Routes } from '@angular/router';
import { UsersPage } from './features/users-page/users-page';
import { Formulario } from './formulario/formulario';

export const routes: Routes = [
  { path: 'users', component: UsersPage },
  { path: 'users/create', component: Formulario },
  { path: 'users', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users/create', redirectTo: 'users' } 
];

/*
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
*/