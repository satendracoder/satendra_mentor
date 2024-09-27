import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsbrInetComponent } from './ssbr-inet.component';

describe('SsbrInetComponent', () => {
  let component: SsbrInetComponent;
  let fixture: ComponentFixture<SsbrInetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SsbrInetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsbrInetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
