import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TepComponent } from './tep.component';

describe('TepComponent', () => {
  let component: TepComponent;
  let fixture: ComponentFixture<TepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TepComponent]
    });
    fixture = TestBed.createComponent(TepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
