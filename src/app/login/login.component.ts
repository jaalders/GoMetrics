import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    
  }

  onLoginSubmit (form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    // call to my authenication service.
    this.loginService.validateLogin(email, password);
  }
}
