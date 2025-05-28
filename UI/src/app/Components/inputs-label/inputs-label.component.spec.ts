import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsLabelComponent } from './inputs-label.component';

describe('InputsLabelComponent', () => {
  let component: InputsLabelComponent;
  let fixture: ComponentFixture<InputsLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputsLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputsLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
