import { Observable } from 'rxjs';
import { share } from 'rxjs/operators'
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class LoginService {
  constructor(
    private http: HttpClient,
  ) { }

  validateLogin(email: string, password: string): Observable<Object> {
    const headers = new HttpHeaders({ 'Content-type': 'application/json' });

    const reqObject = {
      email: email,
      password: password
    };

    const result = this.http.post('http://localhost:3000/login', reqObject, {
      headers: headers
    })

    // this is an observable the can be subscribed to multiple times
    const sharedResult = result.pipe(share())

    sharedResult.subscribe((response: any) => {
      localStorage.setItem('token', response.refreshToken);
    }, (error) => {
      console.log(`an error has occured while calling the login endpoint, error: ${error}`)
    })

    return sharedResult
  }
}