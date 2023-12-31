import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment-services/payment.service';


@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
})
export class PaymentModalComponent {
  ValueAmount: number = 0;
  message: string | undefined;

  constructor(private paymentService: PaymentService) {
    this.paymentService.sharedAmount
  }

  getSharedAmount() {
    
    this.ValueAmount = this.paymentService.sharedAmount
    this.message = ` ${this.ValueAmount}`
    console.log(this.ValueAmount)

  }

  exibirMeuComponente = false;

  mostrarComponente() {
    this.exibirMeuComponente = true;
  }
}
