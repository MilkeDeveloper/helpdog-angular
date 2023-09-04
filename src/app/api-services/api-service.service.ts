import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { User } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private url = 'http://127.0.0.1:8000/users/';

  users: any[] = []

  constructor(private httpClient: HttpClient) { 
    this.getUsers()
  }

  getUsers() {
     console.log('dashboard atualizado')
     const res = this.httpClient.get<User[]>(this.url)
     return res
  }

  _registerUser(user: User) {
    return this.httpClient.post<User>(this.url, user)
  }
}
