import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaSimplesComponent } from './ficha-simples.component';

describe('FichaSimplesComponent', () => {
  let component: FichaSimplesComponent;
  let fixture: ComponentFixture<FichaSimplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichaSimplesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
