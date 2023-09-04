import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  
  sharedAmount: number = 0;

  constructor() {

  }

  getvalue1() {
    console.log(this.sharedAmount)

  }
}
