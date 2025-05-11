import { CommonModule } from '@angular/common';
import { Component, inject, signal, viewChild } from '@angular/core';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarService } from '../../shared/services/calendar.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventFormComponent } from './event-form/event-form.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [FullCalendarModule, CommonModule, ReactiveFormsModule, EventFormComponent], 
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent {
  calendarService = inject(CalendarService);

  events = this.calendarService.events();
  calendarComponent = viewChild<FullCalendarComponent>('calendarRef');
  showEventForm = signal(false);

  clickedTimeForForm = signal<{ start: string; end: string } | null>(null);
  calendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
    height: '550px',

    headerToolbar: {
      left: 'title',
      center: 'today',
      right: 'prev,next'
    },

    views: {
      timeGridDay: {
        headerToolbar: {
          left: 'backToMonth',
          center: 'title',
          right: 'prev,next'
        }
      }
    },

    customButtons: {
      backToMonth: {
        text: '←',
        click: () => {
          const calendarApi = this.calendarComponent()!.getApi();
          calendarApi.changeView('dayGridMonth');
        }
      }
    },

    dateClick: (arg: any) => this.handleDateClick(arg),
    events: this.events,
    
    viewDidMount: (arg: any) => {
      this.calendarService.updateView(arg.view.type);
      console.log(arg.view.type);
      const calendarApi = this.calendarComponent()!.getApi();
      
      if (arg.view.type === 'timeGridDay') {
        calendarApi.setOption('headerToolbar', 
          this.calendarOptions.views.timeGridDay.headerToolbar);
      } else {
        calendarApi.setOption('headerToolbar', 
          this.calendarOptions.headerToolbar);
      }
    }
  };

  handleDateClick(arg: any) {
    const calendarApi = this.calendarComponent()?.getApi();
  
    if (arg.view.type !== 'timeGridDay') {
      calendarApi!.changeView('timeGridDay', arg.date);
    } else {
      const defaultStart = new Date(arg.dateStr).toISOString().slice(0, 16);
      const defaultEnd = new Date(arg.date.getTime() + 3600000).toISOString().slice(0, 16);
  
      this.clickedTimeForForm.set({
        start: defaultStart,
        end: defaultEnd
      });
      this.showEventForm.set(true);
    }
  }

  onFormSubmit(eventData: any) {
    const calendarApi = this.calendarComponent()?.getApi();
    calendarApi!.addEvent({
      id: self.crypto.randomUUID(),
      ...eventData
    });
    this.showEventForm.set(false);
    this.clickedTimeForForm.set(null);
  }

  onFormCancel() {
    this.showEventForm.set(false);
    this.clickedTimeForForm.set(null);
  }

}
