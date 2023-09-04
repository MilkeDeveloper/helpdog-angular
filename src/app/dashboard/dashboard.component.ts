import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { User } from '../models/user.models';
import { Observable } from 'rxjs';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  //users: User[] = [];
  users$ = new Observable<User[]>();

  constructor(private apiService: ApiServiceService, private paymentService: PaymentService) { 
    this.getDataUsers()
  }
    
  getDataUsers() {
    //this.apiService.getUsers()
    //.subscribe(users => this.users = users)
    const u = this.users$ = this.apiService.getUsers()
    //console.log(User)
    return u
  }
  
}
