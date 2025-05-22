import { Component, inject, input } from '@angular/core';
import { Event } from '../../../../shared/models/interfaces/event/event.model';
import { DatePipe } from '@angular/common';
import { CalendarService } from '../../../../shared/services/calendar.service';

@Component({
  selector: 'app-next-steps',
  standalone: true,
  imports: [ DatePipe,],
  templateUrl: './next-steps.component.html',
  styleUrl: './next-steps.component.css'
})
export class NextStepsComponent {
  calendarService = inject(CalendarService)
  eventData = this.calendarService.homepageEventData;
e = input<Event>()
}
