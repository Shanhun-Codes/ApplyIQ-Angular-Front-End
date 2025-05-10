import { Component, inject, ViewEncapsulation } from '@angular/core';
import { FiltersComponent } from "./filters/filters.component";
import { JobCardComponent } from "./job-card/job-card.component";
import { JobApplicationService } from '../../shared/services/application.service';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [FiltersComponent, JobCardComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css',
})
export class JobsComponent {
jobApplicationService = inject(JobApplicationService)
cardData = this.jobApplicationService.getJobCardData()



}
