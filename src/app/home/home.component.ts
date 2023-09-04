import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from '../models/user.models';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) {

  }

  user = {
    username: '',
    password: ''
  };

showAlert: boolean = false
drawerClosed: boolean = true
alert_type: string = ''
  

  navigateToAbout() {
    this.router.navigate(['/about']);
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  loginAuthorize() {
    if (this.user.username === 'admin@admin' && this.user.password === 'laranja123') {
      // Exiba uma mensagem de erro ou lógica de validação apropriada.
      console.log('logado COM SUCESSO')
      this.drawerClosed = true
      return this.navigateToDashboard()
      
     
    }
    else {
      this.showAlert = true
      this.alert_type = 'alert-warning'
      console.log('usuário ou senha inválidos')
      setTimeout(() => this.showAlert = false, 5000)
      
    } 
  } 
}
