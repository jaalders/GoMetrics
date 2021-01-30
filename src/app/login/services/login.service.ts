import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class LoginService {
    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    validateLogin(email: string, password: string) {
        const headers = new HttpHeaders({'Content-type': 'application/json'});

        const reqObject = {
          email: email,
          password: password
        };
    
        this.http.post('http://localhost:3000/login', reqObject, {
            headers: headers
          }).subscribe(
            (response: any) => {
              localStorage.setItem('token', response.refreshToken);
            },
            () => {
              // errors should be logged through a library/framework (Ex: sentry)
              // In addition there exception/error should handled and/or bubbled vs silent-fail
              //console.log(error);
            },
            () => {
              // This is now part of the login service.
              this.router.navigate(["home"]);
            }
          )
    }
}