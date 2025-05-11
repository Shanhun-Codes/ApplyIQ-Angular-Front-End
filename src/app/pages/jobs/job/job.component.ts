import { Component, inject, input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApplicationService } from '../../../shared/services/application.service';
import { Application } from '../../../shared/models/application.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css',
})
export class JobComponent implements OnInit {
  applicationService = inject(ApplicationService);
  private route = inject(ActivatedRoute);
  jobId!: string;
  data!: Application;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.jobId = params.get('id')!;
    });
    this.data = this.getApplicationById();
  }

  getApplicationById() {
    return this.applicationService.getApplicationById(+this.jobId);
  }

  getStatusClass(): string {
    switch (this.data!.status.toLowerCase()) {
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
