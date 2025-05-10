import { Injectable, signal } from '@angular/core';
import { JobApplication } from '../models/jobApplication.model';
import JOB_DUMMY_DATA from '../staticData/jobApplications';
import { JobCard } from '../models/jobCard.model';
@Injectable({
  providedIn: 'root',
})
export class JobApplicationService {
  jobData = signal<JobApplication[]>(JOB_DUMMY_DATA);
  applicationCount = signal<number>(0);
  interviewCount = signal<number>(0);
  offerCount = signal<number>(0);

  getJobData() {
    return this.jobData();
  }

  getHomePageData() {
    this.jobData().forEach((a) => {
      if (a.status.toLowerCase() === 'offer') {
        this.offerCount.update((o) => o + 1);
      }
      if (a.status.toLowerCase() === 'interview') {
        this.interviewCount.update((o) => o + 1);
      }
    });
    this.applicationCount.set(this.jobData().length);
  }

  getJobCardData(): JobCard[] {
    return this.jobData().map((a) => ({
      id: a.id,
      title: a.title,
      company: a.company,
      location: a.location,
      jobType: a.jobType,
      dateApplied: a.dateApplied,
      status: a.status,
    }));
  }

  getJobApplicationById(id: number) {
    return this.jobData().filter((a) => a.id == id)[0];
  }
}
