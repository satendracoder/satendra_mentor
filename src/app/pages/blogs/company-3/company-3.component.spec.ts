import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Company3Component } from './company-3.component';

describe('Company3Component', () => {
  let component: Company3Component;
  let fixture: ComponentFixture<Company3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Company3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Company3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
