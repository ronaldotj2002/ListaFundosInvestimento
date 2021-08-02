import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilDeRiscoComponentComponent } from './perfil-de-risco-component.component';

describe('PerfilDeRiscoComponentComponent', () => {
  let component: PerfilDeRiscoComponentComponent;
  let fixture: ComponentFixture<PerfilDeRiscoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilDeRiscoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilDeRiscoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
