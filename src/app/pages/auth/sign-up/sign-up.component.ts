import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { RouterLink } from '@angular/router';
import { NewUser } from '../../../shared/models/newUser.model';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  authService = inject(AuthService);
  newUser = new FormGroup({
    email: new FormControl<string>(''),
    password: new FormControl<string>(''),
    confirmedPassword: new FormControl<string>(''),
  });

  onSubmitHandler() {
    if (this.newUser.valid) {
      const { email, password, confirmedPassword } = this.newUser.value;
      const user: NewUser = {
        email: email as string,
        password: password as string,
        confirmedPassword: confirmedPassword as string,
      };
      this.authService.signup(user);
    }
  }
}
