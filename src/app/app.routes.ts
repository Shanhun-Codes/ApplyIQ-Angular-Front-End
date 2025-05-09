import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './pages/landing/landing.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { authGuard } from './shared/auth/guards/auth.guard';
import { redirectIfLoggedInGuard } from './shared/auth/guards/redirect.guard';
import { NewComponent } from './pages/new/new.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { HomeComponent } from './pages/home/home.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
    {
      path: '',
      component: LandingComponent,
      canActivate: [redirectIfLoggedInGuard]
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [authGuard],
      children: [
        {path: '', redirectTo: 'new', pathMatch: 'full'},
        {path: 'new', component: NewComponent},
        {path: 'calendar', component: CalendarComponent},
        {path: 'home', component: HomeComponent},
        {path: 'jobs', component: JobsComponent},
        {path: 'profile', component: ProfileComponent},
        {path: 'settings', component: SettingsComponent},

    ],
    },
    {
      path: 'signup',
      component: SignUpComponent,
      canActivate: [redirectIfLoggedInGuard],
    },
    {
      path: 'signin',
      component: SignInComponent,
      canActivate: [redirectIfLoggedInGuard],
    },
    { path: '**', redirectTo: 'signin' },
  ];
  
