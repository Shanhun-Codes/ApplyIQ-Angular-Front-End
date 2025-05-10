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

getEvents() {
  return this.events()
}

updateView(view: string) {
  this._viewType.next(view);
}


}
