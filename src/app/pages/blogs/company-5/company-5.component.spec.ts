import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Company5Component } from './company-5.component';

describe('Company5Component', () => {
  let component: Company5Component;
  let fixture: ComponentFixture<Company5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Company5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Company5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
