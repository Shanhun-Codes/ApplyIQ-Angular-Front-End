import { Injectable, signal } from '@angular/core';
import EVENTS_DATA from '../staticData/calendarEvents'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
events = signal(EVENTS_DATA)
private _viewType = new BehaviorSubject<string>('dayGridMonth');
public viewType$ = this._viewType.asObservable();
homepageEventData = signal<{title: string, start: Date}[]>(this.getEventsForHome())

getEvents() {
  return this.events()
}

getEventsForHome() {
  return this.events().map((e) => ({
    title: e.title,
    start: new Date(e.start)
  }));
}


updateView(view: string) {
  this._viewType.next(view);
}



}
