import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public login() {

  }

  public logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem("token");
  }





}
