import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-qr-code-display',
  templateUrl: './qr-code-display.component.html',
})
export class QrCodeDisplayComponent {
  qrCodeData: string | undefined;
  message: string | undefined;

  amount: number = 20;

  constructor(private paymentService: PaymentService) {
      this.qrCodeData = `valor:${this.amount}`;
    
  }

  
}
