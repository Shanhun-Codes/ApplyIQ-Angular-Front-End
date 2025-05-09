import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  authService = inject(AuthService)
  newUser = new FormGroup({
    email: new FormControl<string>(''),
    password: new FormControl<string>(''),
    confirmedPassword: new FormControl<string>(''),
  });

  onSubmitHandler() {
    this.authService.signup(this.newUser.value)
  }

}
