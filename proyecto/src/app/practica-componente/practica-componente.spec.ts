import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticaComponente } from './practica-componente';

describe('PracticaComponente', () => {
  let component: PracticaComponente;
  let fixture: ComponentFixture<PracticaComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticaComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticaComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
