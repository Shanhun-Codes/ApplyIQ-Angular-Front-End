// auth/redirect-if-auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

export const redirectIfLoggedInGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isLoggedIn = authService.checkTokenAndUpdateStatus();

  if (isLoggedIn) {
    router.navigate(['/dashboard']);
  }

  return true;
};
