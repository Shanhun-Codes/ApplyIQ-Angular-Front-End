import { Component, input } from '@angular/core';
import { JobCard } from '../../../shared/models/jobCard.model';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css'
})
export class JobCardComponent {
data = input<JobCard>()
}
