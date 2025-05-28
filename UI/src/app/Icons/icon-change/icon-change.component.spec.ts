import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconChangeComponent } from './icon-change.component';

describe('IconChangeComponent', () => {
  let component: IconChangeComponent;
  let fixture: ComponentFixture<IconChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconChangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
