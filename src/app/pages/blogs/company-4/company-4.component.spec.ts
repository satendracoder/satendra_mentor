import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Company4Component } from './company-4.component';

describe('Company4Component', () => {
  let component: Company4Component;
  let fixture: ComponentFixture<Company4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Company4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Company4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
