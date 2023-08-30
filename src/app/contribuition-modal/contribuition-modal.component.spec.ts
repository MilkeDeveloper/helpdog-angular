import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuitionModalComponent } from './contribuition-modal.component';

describe('ContribuitionModalComponent', () => {
  let component: ContribuitionModalComponent;
  let fixture: ComponentFixture<ContribuitionModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContribuitionModalComponent]
    });
    fixture = TestBed.createComponent(ContribuitionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
