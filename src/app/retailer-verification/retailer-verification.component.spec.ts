import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerVerificationComponent } from './retailer-verification.component';

describe('RetailerVerificationComponent', () => {
  let component: RetailerVerificationComponent;
  let fixture: ComponentFixture<RetailerVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
