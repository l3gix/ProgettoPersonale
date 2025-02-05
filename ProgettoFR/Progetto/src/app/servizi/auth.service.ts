import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { UserRegister } from '../model/userregister.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url !: string ;
  private islogged = false;
  constructor(private http : HttpClient) { }

  login(user : User)
  {
    this.islogged = true
    return this.http.post(this.url,user)
  }

  register(user : UserRegister)
  {
    this.islogged = true
    return this.http.post(this.url,user)
  }

  logout()
  {
    this.islogged = false
  }

  getIsLogged() {
    return this.islogged;
  }

}
