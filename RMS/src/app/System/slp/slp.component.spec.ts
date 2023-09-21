import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlpComponent } from './slp.component';

describe('SlpComponent', () => {
  let component: SlpComponent;
  let fixture: ComponentFixture<SlpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlpComponent]
    });
    fixture = TestBed.createComponent(SlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
