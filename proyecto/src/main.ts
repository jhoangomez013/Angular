import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import {Injectable, NgModule} from '@angular/core';

//bootstrapApplication(App, appConfig)  .catch((err) => console.error(err));
bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});
@NgModule({
  imports: [],  
  exports: [],
  providers: [],
  bootstrap: [AppModule]
  //,entryComponents: [miModal]
})


//se pueden crear servicios y componentes que se pueden inyectar en otros componentes ng g service
@Injectable({
  providedIn: 'root'
})
export class AppModule { }

