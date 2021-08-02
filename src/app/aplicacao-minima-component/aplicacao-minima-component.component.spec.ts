import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacaoMinimaComponentComponent } from './aplicacao-minima-component.component';

describe('AplicacaoMinimaComponentComponent', () => {
  let component: AplicacaoMinimaComponentComponent;
  let fixture: ComponentFixture<AplicacaoMinimaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplicacaoMinimaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicacaoMinimaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
