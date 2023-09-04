import { Component, inject } from '@angular/core';
import { PaymentService } from '../payment.service';
import { ApiServiceService } from '../api-service.service';
import { Observable } from 'rxjs';
import { User } from '../models/user.models';
import { PaymentDataService } from '../payment-data.service';
import { EmailValidator, FormBuilder, FormControl, MaxValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-contribuition-modal',
  templateUrl: './contribuition-modal.component.html',
  styleUrls: ['./contribuition-modal.component.scss']
})
export class ContribuitionModalComponent {
  showPaymentModal: boolean = false;

  amount: number = 0 / 100;
  name: string = '' ;
  email: string= '';
  
  users$ = new Observable<User[]>();

  constructor(private apiService: ApiServiceService, private paymentService: PaymentService ) {
    
  }

  private formBuilderService = inject(FormBuilder)

  protected form = this.formBuilderService.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    amount: [0.00 /100, Validators.max(5)],

  })
  
  registerUser() {
    const currentDate = new Date()
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adiciona zero à esquerda para os meses < 10
    const day = String(currentDate.getDate()).padStart(2, '0'); // Adiciona zero à esquerda para os dias < 10

    const formattedDate = `${year}-${month}-${day}`;

    const user: User = {
      name: this.name,
      email: this.email,
      value: this.amount,
      created_at: formattedDate.toString()
    };
    
    const sharedValue = this.paymentService.sharedAmount = this.amount;
    console.log(sharedValue)
    this.form.reset();

    return this.apiService._registerUser(user).subscribe((response) => {
      console.log(user); // Aqui você pode lidar com a resposta da API
      // Qualquer outra lógica que você queira executar após o registro bem-sucedido
      this.apiService.getUsers().subscribe()
      
    }); 
  }

  sendAmountData() {
    const value = this.paymentService.sharedAmount;
    this.amount = value
    console.log(value);
    return value;
  }

  clearForm() {
    this.form.reset()
  }
}
