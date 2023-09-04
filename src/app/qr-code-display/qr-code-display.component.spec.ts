import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrCodeDisplayComponent } from './qr-code-display.component';

describe('QrCodeDisplayComponent', () => {
  let component: QrCodeDisplayComponent;
  let fixture: ComponentFixture<QrCodeDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QrCodeDisplayComponent]
    });
    fixture = TestBed.createComponent(QrCodeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
