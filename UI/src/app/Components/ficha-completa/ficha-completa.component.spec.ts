import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaCompletaComponent } from './ficha-completa.component';

describe('FichaCompletaComponent', () => {
  let component: FichaCompletaComponent;
  let fixture: ComponentFixture<FichaCompletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichaCompletaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaCompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
