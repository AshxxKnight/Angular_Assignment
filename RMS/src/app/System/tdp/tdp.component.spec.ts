import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDPComponent } from './tdp.component';

describe('TDPComponent', () => {
  let component: TDPComponent;
  let fixture: ComponentFixture<TDPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TDPComponent]
    });
    fixture = TestBed.createComponent(TDPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
