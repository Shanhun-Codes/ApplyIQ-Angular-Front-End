import { Injectable, signal } from '@angular/core';
import { JobApplication } from '../models/jobApplication.model';
import JOB_DUMMY_DATA from '../staticData/jobApplications'
@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {
jobData = signal<JobApplication[]>(JOB_DUMMY_DATA)

getJobData(){
  return this.jobData()
}
}
