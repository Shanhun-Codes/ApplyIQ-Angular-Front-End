import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { ApplicationService } from '../../shared/services/application.service';
import { RouterLink } from '@angular/router';
import { CalendarService } from '../../shared/services/calendar.service';
import { DatePipe } from '@angular/common';
import { QuickInfoComponent } from "./features/quick-info/quick-info.component";
import { NextStepsComponent } from './features/next-steps/next-steps.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [QuickInfoComponent, NextStepsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  calendarService = inject(CalendarService);
  applicationService = inject(ApplicationService);
  authService = inject(AuthService);
  isFirstTime = this.authService.isFirstTime;
  eventData = this.calendarService.homepageEventData;



  landingText: string = '';
  currentDateAndTime = new Date()


  ngOnInit(): void {
    if (!this.isFirstTime()) {
      this.landingText = `Welcome back!`;
    } else {
      this.landingText = `Welcome!`;
    }
    this.applicationService.getHomePageData();
  }
}
