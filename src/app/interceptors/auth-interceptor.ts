import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
// this will work very well if the app is only talking to one backend
// otherwise it could be a security risk to attach the token to every outgoing request

// takes each HTTP request and attaches the JWT token to it.
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // unrelated to this class, but there are multiple instances across the code base
        // where local storage is accessed directly
        // a better/future proof/more maintainable approach would be to 
        // create a service that abstracts local storage all together
        // this would allow for easily replacing it with an actual API call 
        const token = localStorage.getItem("accessToken");
        
        if (token) {
            const clonedHttpRequest = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + token)
            });

            return next.handle(clonedHttpRequest);
        } else {
            return next.handle(req);
        }
    }
}