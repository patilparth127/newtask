import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated() {
    return true
  }

  constructor() { }

  isLoggedIn() {
    const token = localStorage.getItem('token'); 
    return token == null ? false : true;
  }
}