import { Component, inject, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { FiltersComponent } from './filters/filters.component';
import { ApplicationCardComponent } from './job-card/job-card.component';
import { ApplicationService } from '../../shared/services/application.service';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { FilterStatus } from '../../shared/models/types/filterByStatus.model';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [FiltersComponent, ApplicationCardComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css',
})
export class JobsComponent {
  applicationService = inject(ApplicationService);
  cardData = this.applicationService.cardData;

}
