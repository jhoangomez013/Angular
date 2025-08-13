import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ciclos-v',
  templateUrl: './ciclos-v.html',
  styleUrls: ['./ciclos-v.css']
})
export class CiclosV implements OnInit, OnDestroy {
  hora = new Date();
  intervalo: number | null = null;

  ngOnInit(): void {
    this.intervalo = setInterval(() => {
      this.hora = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {
    console.log('Componente CiclosV destruido');
    if (this.intervalo !== null) {
      clearInterval(this.intervalo);
    }
  }

  @Output() toggle = new EventEmitter<void>();

  toggleParent(): void {
    this.toggle.emit();
  }
}