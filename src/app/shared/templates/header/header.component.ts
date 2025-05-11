import { Component, inject } from '@angular/core';
import { AppInfoService } from '../../services/app-info.service';
import { AuthService } from '../../services/auth.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
appInfoService = inject(AppInfoService)
authService = inject(AuthService)
headerInfo = this.appInfoService.getheaderInfo()
isLoggedIn = this.authService.isLoggedIn

}
