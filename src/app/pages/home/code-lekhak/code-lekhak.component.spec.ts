import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeLekhakComponent } from './code-lekhak.component';

describe('CodeLekhakComponent', () => {
  let component: CodeLekhakComponent;
  let fixture: ComponentFixture<CodeLekhakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeLekhakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeLekhakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
