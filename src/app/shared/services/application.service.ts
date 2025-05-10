import { computed, Injectable, OnInit, signal } from '@angular/core';
import { Application } from '../models/application.model';
import JOB_DUMMY_DATA from '../staticData/applications';
import { ApplicationCard } from '../models/applicationCard.model';
import { FilterStatus } from '../models/types/filterByStatus.model';
import { CurrentDateFilter } from '../models/types/filterByDate.model';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  currentStatusFilter = signal<FilterStatus>('all');
  currentDateFilter = signal<CurrentDateFilter>('new');
  applicationData = signal<Application[]>(JOB_DUMMY_DATA);
  applicationCount = signal<number>(0);
  interviewCount = signal<number>(0);
  offerCount = signal<number>(0);
  cardData = computed(() => this.getApplicationCardData());

  getApplicationData() {
    return this.applicationData();
  }

  getHomePageData() {
    this.applicationData().forEach((a) => {
      if (a.status.toLowerCase() === 'offer') {
        this.offerCount.update((o) => o + 1);
      }
      if (a.status.toLowerCase() === 'interview') {
        this.interviewCount.update((o) => o + 1);
      }
    });
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
