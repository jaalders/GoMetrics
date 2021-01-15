import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()

// takes each HTTP request and attaches the JWT token to it.
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
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