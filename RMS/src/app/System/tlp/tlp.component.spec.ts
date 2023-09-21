import { ComponentFixture, TestBed } from '@angular/core/testing';

import TLPComponent from './tlp.component';

describe('TLPComponent', () => {
  let component: TLPComponent;
  let fixture: ComponentFixture<TLPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TLPComponent]
    });
    fixture = TestBed.createComponent(TLPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
