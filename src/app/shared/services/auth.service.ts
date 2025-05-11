import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { NewUser } from '../models/newUser.model';
import { Router } from '@angular/router';
import { Credentials } from '../models/credentials.model';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  router = inject(Router);
  http = inject(HttpClient);
  isLoggedIn = signal<boolean>(false);
  currentUser = signal<string>('');
  isFirstTime = signal<boolean>(false);

  private baseUrl: string = 'https://applyiq-rails-api.onrender.com';

  checkTokenAndUpdateStatus(): boolean {
    const token = sessionStorage.getItem('jwt');
    this.isLoggedIn.set(!!token);
    console.log('RedirectIfLoggedInGuard: token exists?', this.isLoggedIn());

    return !!token;
  }

  async signup(newUser: NewUser): Promise<void> {
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
      this.isFirstTime.set(true);
      await this.signin(newUser);
    } catch (err) {
      console.error('Signup failed:', err);
    }
  }

  signin(user: Credentials): Promise<void> {
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
            const token = res.headers.get('authorization');
            console.log('Login successful');

            if (token) {
              sessionStorage.setItem('jwt', token);
            }
            this.checkTokenAndUpdateStatus();
            this.currentUser.set(user.email);
            this.router.navigate(['/dashboard']);
            resolve();
          },
          error: (err) => {
            console.log('Login failed: ', err);
            reject(err);
          },
        });
    });
  }

  logout(): void {
    sessionStorage.clear();
    this.checkTokenAndUpdateStatus();
    this.isFirstTime.set(false);
    this.router.navigate(['']);
  }
}
