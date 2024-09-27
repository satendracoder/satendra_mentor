import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedmilComponent } from './redmil.component';

describe('RedmilComponent', () => {
  let component: RedmilComponent;
  let fixture: ComponentFixture<RedmilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedmilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedmilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
