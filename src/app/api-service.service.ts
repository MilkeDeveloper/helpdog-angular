import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { User } from './models/user.models';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private url = 'http://127.0.0.1:8000/users/'; // Substitua pela URL da sua API

  // Use um BehaviorSubject para manter a lista de usuários atualizada
  //private usersSubject = new BehaviorSubject<User[]>([]);

  // Atualize a lista de usuários quando necessário
  //private updateUsers(users: User[]) {
    //this.usersSubject.next(users);
  //}

  users: any[] = []

  constructor(private httpClient: HttpClient) { 
    this.getUsers()
  }

  getUsers() {
     //this.updateUsers(this.users);
     console.log('dashboard atualizado')
     const res = this.httpClient.get<User[]>(this.url)
     return res
     
     
  }

  _registerUser(user: User) {
    return this.httpClient.post<User>(this.url, user)
  }
}
