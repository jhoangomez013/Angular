import { Routes, RouterModule } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    { path: 'home', component: Home },
    {path:'', redirectTo:'/home', pathMatch:'full'},
    { path: 'about', component: About },
    {path:'', redirectTo:'/about', pathMatch:'full'},
    //{path: '**', component: NotFound}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})  
export class AppRoutingModule { }