import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaButtonComponent } from './ficha-button.component';

describe('FichaButtonComponent', () => {
  let component: FichaButtonComponent;
  let fixture: ComponentFixture<FichaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichaButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
