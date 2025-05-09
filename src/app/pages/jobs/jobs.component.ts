import { Component, ViewEncapsulation } from '@angular/core';
import { FiltersComponent } from "./filters/filters.component";

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [FiltersComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css',
  encapsulation: ViewEncapsulation.None
})
export class JobsComponent {

}
