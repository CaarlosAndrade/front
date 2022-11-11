import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbienteConsultaComponent } from './ambiente-consulta.component';

describe('AmbienteConsultaComponent', () => {
  let component: AmbienteConsultaComponent;
  let fixture: ComponentFixture<AmbienteConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbienteConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbienteConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
