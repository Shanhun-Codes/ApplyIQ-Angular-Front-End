import { Component, effect, inject, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.css'
})
export class EventFormComponent {
  private fb = inject(FormBuilder);

  @Input() clickedTime: { start: string; end: string } | null = null;
  @Output() formSubmit = new EventEmitter<any>();
  @Output() formCancel = new EventEmitter<void>();

  eventForm = this.fb.nonNullable.group({
    title: ['', Validators.required],
    start: ['', Validators.required],
    end: [''],
    backgroundColor: ['#3f51b5'],
    extendedProps: this.fb.group({
      jobTitle: [''],
      company: [''],
      contact: [''],
      status: ['scheduled'],
      notes: ['']
    })
  });

  constructor() {
    effect(() => {
      if (this.clickedTime) {
        this.eventForm.patchValue({
          start: this.clickedTime.start,
          end: this.clickedTime.end
        });
      }
    });
  }

  submitEvent() {
    if (this.eventForm.valid) {
      this.formSubmit.emit(this.eventForm.getRawValue());
    }
  }

  cancelEvent() {
    this.formCancel.emit();
  }
}
