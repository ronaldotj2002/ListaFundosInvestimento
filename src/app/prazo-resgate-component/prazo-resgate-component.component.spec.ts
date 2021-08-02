import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrazoResgateComponentComponent } from './prazo-resgate-component.component';

describe('PrazoResgateComponentComponent', () => {
  let component: PrazoResgateComponentComponent;
  let fixture: ComponentFixture<PrazoResgateComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrazoResgateComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrazoResgateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
