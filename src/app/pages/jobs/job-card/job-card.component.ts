import { Component, input } from '@angular/core';
import { ApplicationCard } from '../../../shared/models/interfaces/application/applicationCard.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css'
})
export class ApplicationCardComponent {
data = input<ApplicationCard>()


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
