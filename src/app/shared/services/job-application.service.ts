import { Injectable, signal } from '@angular/core';
import { JobApplication } from '../models/jobApplication.model';
import JOB_DUMMY_DATA from '../staticData/jobApplications'
import { JobCard } from '../models/jobCard.model';
@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {
jobData = signal<JobApplication[]>(JOB_DUMMY_DATA)

getJobData(){
  return this.jobData()
}

getJobCardData(): JobCard[] {
  return this.jobData().map((j) => ({
    id: j.id,
    title: j.title,
    company: j.company,
    location: j.location,
    jobType: j.jobType,
    dateApplied: j.dateApplied,
    status: j.status,
  }));
}

getJobApplicationById(id: number) {
  return this.jobData().filter((j) => j.id == id)[0]
}
}
