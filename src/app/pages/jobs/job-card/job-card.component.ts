import { Component, input } from '@angular/core';
import { JobCard } from '../../../shared/models/jobCard.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css'
})
export class JobCardComponent {
data = input<JobCard>()


getStatusClass(): string {
  switch (this.data()!.status.toLowerCase()) {
    case 'applied':
      return 'status-applied';
    case 'interview':
      return 'status-interview';
    case 'rejected':
      return 'status-rejected';
    case 'offer':
      return 'status-offer';
    default:
      return '';
  }
}
}
