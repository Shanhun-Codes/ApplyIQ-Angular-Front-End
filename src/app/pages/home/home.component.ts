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
isFirstTime = this.authService.isFirstTime
landingText: string = ''

ngOnInit(): void {
  if(!this.isFirstTime()) {
    this.landingText = `Welcome back!`
  } else {
  this.landingText = `Welcome!`
} 
}
}
