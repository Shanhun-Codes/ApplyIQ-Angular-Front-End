import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
authService = inject(AuthService)
currentUser = this.authService.currentUser
landingText: string = ''

ngOnInit(): void {
  if(this.currentUser()) {
    this.landingText = `Welcome, ${this.currentUser}`
  } else {
    this.landingText = `Welcome back!`
  }
}
}
