import { ExperienceService } from './../../../services/Experience/experience.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  experienceDetail: any[] = [];

  constructor(private experienceSvc: ExperienceService) {
    this.experienceDetail = this.experienceSvc.getExperienceDetail();
  }
}
