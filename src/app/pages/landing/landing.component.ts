import { Component, inject } from '@angular/core';
import { AppInfoService } from '../../shared/services/app-info.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
appInfoService = inject(AppInfoService)
info = this.appInfoService.getLandingInfo()
}
