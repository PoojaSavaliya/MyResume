import { Component } from '@angular/core';
import { EducationService } from 'src/app/services/Education/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  educationDetail: any[] = [];

  constructor(private educationSvc: EducationService) {
    this.educationDetail = this.educationSvc.educationDetail();
  }
}
