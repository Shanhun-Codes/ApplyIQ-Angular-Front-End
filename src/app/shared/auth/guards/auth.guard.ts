import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isAuthenticated = authService.checkTokenAndUpdateStatus();

  // If not authenticated, redirect to signin page
  if (!isAuthenticated) {
    router.navigate(['/signin']);
    return false;
  }

  // If authenticated, allow access
  return true;
};

