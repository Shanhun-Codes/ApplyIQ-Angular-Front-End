import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
  encapsulation: ViewEncapsulation.None
})
export class FiltersComponent {
  selectedStatus: string = 'all';
  selectedDate: string = 'all';
  
}
