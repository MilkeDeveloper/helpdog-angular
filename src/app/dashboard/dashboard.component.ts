import { Component } from '@angular/core';
import { ApiServiceService } from '../api-services/api-service.service';
import { User } from '../models/user.models';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  //users: User[] = [];
  users$ = new Observable<User[]>();

  constructor(private apiService: ApiServiceService) { 
    this.getDataUsers()
  }
    
  getDataUsers() {
    const u = this.users$ = this.apiService.getUsers()
    //console.log(User)
    return u
  }
  
}
