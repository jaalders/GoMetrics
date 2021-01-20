import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLoginSubmit (form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const headers = new HttpHeaders({'Content-type': 'application/json'});

    const reqObject = {
      email: email,
      password: password
    };

    // this kind of logic I think make sense to be part of the login service
    this.http.post('http://localhost:3000/login', reqObject, {
      headers: headers
    }).subscribe(
      (response: any) => {
        //localStorage.setItem("accessToken", response.accessToken);
        //localStorage.setItem("refreshToken", response.refreshToken);
        localStorage.setItem('token', response.refreshToken);
      },
      (error) => {
        // this is ok in a demo app, but not production quality, 
        // errors should be logged through a library/framework (Ex: sentry)
        // In additoin there exception/error should handled and/or bubbled vs silent-fail
        console.log(error);
      },
      () => {
        console.log("login worked!");
        // if this was part of the service, I am not sure it would make sense to route directly from the service
        this.router.navigate(["home"]);
      }
    )
  }

}
