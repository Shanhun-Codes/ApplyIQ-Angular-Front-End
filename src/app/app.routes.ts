import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './pages/landing/landing.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { authGuard } from './shared/auth/guards/auth.guard';
import { redirectIfLoggedInGuard } from './shared/auth/guards/redirect.guard';

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
      children: [],
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
  
