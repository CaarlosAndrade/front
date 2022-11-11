import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoAlteracaoComponent } from './veiculo-alteracao.component';

describe('VeiculoAlteracaoComponent', () => {
  let component: VeiculoAlteracaoComponent;
  let fixture: ComponentFixture<VeiculoAlteracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculoAlteracaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoAlteracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
