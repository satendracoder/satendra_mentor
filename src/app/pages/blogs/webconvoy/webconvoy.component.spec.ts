import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebconvoyComponent } from './webconvoy.component';

describe('WebconvoyComponent', () => {
  let component: WebconvoyComponent;
  let fixture: ComponentFixture<WebconvoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebconvoyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebconvoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
