import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Engine {
  start() {
    return 'Motor encendido';
  }


}
