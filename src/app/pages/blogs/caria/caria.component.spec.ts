import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CariaComponent } from './caria.component';

describe('CariaComponent', () => {
  let component: CariaComponent;
  let fixture: ComponentFixture<CariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CariaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
