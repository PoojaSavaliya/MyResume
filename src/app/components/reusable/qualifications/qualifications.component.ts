import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.css'],
})
export class QualificationsComponent {
  @Input() qualificationData: any[] = [];
  @Input() type: String = '';
}
