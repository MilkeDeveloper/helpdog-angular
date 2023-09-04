import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentDataService {

  private amountValue!: number;

  setAmount(amount: number): void {
    this.amountValue = amount;
  }

  getAmount(): number {
    return this.amountValue;
  }
}
