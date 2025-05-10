import { Component, inject, input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobApplicationService } from '../../../shared/services/application.service';
import { JobApplication } from '../../../shared/models/jobApplication.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css',
})
export class JobComponent implements OnInit {
  jobApplicationService = inject(JobApplicationService);
  private route = inject(ActivatedRoute);
  jobId!: string;
  data!: JobApplication;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.jobId = params.get('id')!;
    });
    this.data = this.getJobApplicationById();
  }

  getJobApplicationById() {
    return this.jobApplicationService.getJobApplicationById(+this.jobId);
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
