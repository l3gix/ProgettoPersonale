import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionstoregService 
{
  private storageKey = 'user';

  private userSubject = new BehaviorSubject<User | null>(
    this.getSessionDataFromStorage()
  );

  // Observable per ascoltare i cambiamenti
  user$ = this.userSubject.asObservable();

  // Metodo per aggiornare il valore
  setSessionData(user: User) {
    sessionStorage.setItem(this.storageKey, JSON.stringify(user));
    this.userSubject.next(user);
  }

  // Metodo per ottenere il valore attuale
  getSessionData(): User | null {
    return this.userSubject.value;
  }

  // Metodo per rimuovere il valore
  clearSessionData() {
    sessionStorage.removeItem(this.storageKey);
    this.userSubject.next(null);
  }

  // Metodo per recuperare i dati dal Session Storage
  private getSessionDataFromStorage(): User | null {
    const storedUser = sessionStorage.getItem(this.storageKey);
    return storedUser ? JSON.parse(storedUser) : null;
  }

}
