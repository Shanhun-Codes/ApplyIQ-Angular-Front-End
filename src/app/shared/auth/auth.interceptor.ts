// src/app/auth/auth.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export const AuthInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const token = sessionStorage.getItem('jwt');

  if (token) {
    request = request.clone({
      setHeaders: {
        Authorization: token,
      },
    });
  }

  return next(request);
};
