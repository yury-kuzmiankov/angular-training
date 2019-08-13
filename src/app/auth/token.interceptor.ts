import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  static readonly AUTH_PARAMETER = '?auth=';
  constructor(public auth: AuthService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.auth.token;
    let req = request;
    if (token) {
      const uri = request.url + TokenInterceptor.AUTH_PARAMETER + token;
      req = request.clone({ url:  uri });
    }
    return next.handle(req);
  }
}
