import { Injectable } from '@angular/core';
import { UserLogin } from '../model/userlogin';
import { UserRegister } from '../model/userregister';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionstoregService } from './sessionstoreg.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url : string = "http://localhost:8080/auth/"
  private islogged = false;

  constructor(private http : HttpClient,private st : SessionstoregService) { }

  login(user : UserLogin)
  {
    //this.islogged = true

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');


    const body = JSON.stringify({username:user.getUsername(),password:user.getPassword()});

    return this.http.post(`${this.url}login`,body ,{ headers })
  }

  register(user : UserRegister)
  {

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

    //this.islogged = true;

    const body = JSON.stringify({username:user.getUsername(),
                                password:user.getPassword(),
                                nome:user.getNome(),
                                cognome:user.getCognome()});

    return this.http.post(`${this.url}register`,body,{ headers });
  }

  logout()
  {
    this.islogged = false
  }

  getIsLogged() {
    return this.islogged;
  }

  setIsLogged() {
    this.islogged = true;
  }

  setLogout() {
    this.islogged = false;
  }

}
