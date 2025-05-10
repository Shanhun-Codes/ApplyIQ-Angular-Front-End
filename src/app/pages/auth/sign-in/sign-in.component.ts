import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { Credentials } from '../../../shared/models/credentials.model';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  authService = inject(AuthService);
  user = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmitHandler() {
    if (this.user.valid) {
      const { email, password } = this.user.value;
      const user: Credentials = {
        email: email as string,
        password: password as string,
      };
      this.authService.signin(user);
      this.authService.isFirstTime.set(false);
    }
  }
}
