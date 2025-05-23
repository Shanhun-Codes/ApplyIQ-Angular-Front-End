import { computed, inject, Injectable, signal } from '@angular/core';
import { Application } from '../models/interfaces/application/application.model';
import { ApplicationCard } from '../models/interfaces/application/applicationCard.model';
import { FilterStatus } from '../models/types/filterByStatus.model';
import { CurrentDateFilter } from '../models/types/filterByDate.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { transformJobApplications } from '../../utils/transformers/applcation.transformer';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  http = inject(HttpClient);

  baseUrl = environment.apiUrl;

  currentStatusFilter = signal<FilterStatus>('all');
  currentDateFilter = signal<CurrentDateFilter>('new');
  applicationData = signal<Application[]>([]);
  applicationCount = signal<number>(0);
  interviewCount = signal<number>(0);
  offerCount = signal<number>(0);
  cardData = computed(() => this.getApplicationCardData());

  getApplicationData() {
    return this.http
      .get<Application[]>(this.baseUrl + '/job_applications')
      .subscribe({
        next: (res) => {
          this.applicationData.set(transformJobApplications(res));
        },
        error: (err) => {
          console.error('Failed to fetch applications:', err);
        },
      });
  }

  getHomePageData() {
    let offers = 0;
    let interviews = 0;
    this.applicationData().forEach((a) => {
      if (a.status.toLowerCase() === 'offer') {
        offers++;
      }
      if (a.status.toLowerCase() === 'interview') {
        interviews++;
      }
    });
    this.interviewCount.set(interviews);
    this.offerCount.set(offers);

    this.applicationCount.set(this.applicationData().length);
  }

  getApplicationCardData(): ApplicationCard[] {
    const filteredByStatus = this.applicationData().filter((a) => {
      if (this.currentStatusFilter().toLowerCase() === 'all') {
        return true;
      }
      return (
        a.status.toLowerCase() === this.currentStatusFilter().toLowerCase()
      );
    });

    console.log(filteredByStatus);

    const filteredByDate = filteredByStatus.sort((a, b) => {
      if (this.currentDateFilter().toLowerCase() === 'new') {
        return (
          new Date(b.dateApplied).getTime() - new Date(a.dateApplied).getTime()
        );
      } else if (this.currentDateFilter() === 'old') {
        return (
          new Date(a.dateApplied).getTime() - new Date(b.dateApplied).getTime()
        );
      }
      return 0;
    });

    const data = filteredByDate.map((a) => ({
      id: a.id,
      title: a.title,
      company: a.company,
      location: a.location,
      jobType: a.jobType,
      dateApplied: a.dateApplied,
      status: a.status,
    }));
    console.log(this.currentStatusFilter());
    console.log(this.currentDateFilter());
    console.log(data);
    return data;
  }

  getApplicationById(id: number) {
    return this.applicationData().filter((a) => a.id == id)[0];
  }
}
