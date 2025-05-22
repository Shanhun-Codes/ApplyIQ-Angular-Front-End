import { Component, inject } from '@angular/core';
import { ApplicationService } from '../../../../shared/services/application.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-quick-info',
  standalone: true,
  imports: [RouterLink,],
  templateUrl: './quick-info.component.html',
  styleUrl: './quick-info.component.css'
})
export class QuickInfoComponent {
  applicationService = inject(ApplicationService)
  applicationCount = this.applicationService.applicationCount;
  interViewCount = this.applicationService.interviewCount;
  offerCount = this.applicationService.offerCount;
}
