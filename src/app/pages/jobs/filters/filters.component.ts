import { Component, EventEmitter, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ApplicationService } from '../../../shared/services/application.service';
import { FilterStatus } from '../../../shared/models/types/filterByStatus.model';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent {
  applicationService = inject(ApplicationService);
  cardData = this.applicationService.cardData;

  currentStatus = this.applicationService.currentStatusFilter
  currentDate = this.applicationService.currentDateFilter
  
 filterHandler() {
  this.applicationService.getApplicationCardData()
 }


}
