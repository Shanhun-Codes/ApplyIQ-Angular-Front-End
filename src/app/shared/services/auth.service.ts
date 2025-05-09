import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit, signal } from '@angular/core';
import { NewUser } from '../models/newUser.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  router = inject(Router);
  http = inject(HttpClient);
  isLoggedIn = signal<boolean>(false);
  currentUser = signal<string>('')

  private baseUrl: string = 'http://localhost:3000';

  checkTokenAndUpdateStatus(): boolean {
    const token = sessionStorage.getItem('jwt');
    this.isLoggedIn.set(!!token);
    console.log('RedirectIfLoggedInGuard: token exists?', this.isLoggedIn());

    return !!token;
  }

  async signup(newUser: any) {
    const signupDataPostFormat = {
      user: {
        email: newUser.email,
        password: newUser.password,
        password_confirmation: newUser.confirmedPassword,
      },
    };
    console.log(signupDataPostFormat);

    try {
      const res = await this.http
        .post(this.baseUrl + '/users', signupDataPostFormat)
        .toPromise();
      console.log('Signup Successful:', res);

      await this.signin(newUser);

      this.router.navigate(['/dashboard']);
    } catch (err) {
      console.error('Signup failed:', err);
    }
  }

  signin(user: any): Promise<void> {
    const loginDataFormat = {
      user: {
        email: user.email,
        password: user.password,
      },
    };

    return new Promise((resolve, reject) => {
      this.http
        .post(this.baseUrl + '/users/sign_in', loginDataFormat, {
          observe: 'response',
        })
        .subscribe({
          next: (res) => {
            const token = res.headers.get('Authorization');
            console.log('Login successful');

            if (token) {
              sessionStorage.setItem('jwt', token);
            }
            this.checkTokenAndUpdateStatus();
            this.currentUser.set(user)
            resolve();
          },
          error: (err) => {
            console.log('Login failed: ', err);
            reject(err);
          },
        });
    });
  }
}
