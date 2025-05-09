import { Component, inject } from '@angular/core';
import { AppInfoService } from '../../shared/services/app-info.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
appInfoService = inject(AppInfoService)
info = this.appInfoService.getLandingInfo()
}
