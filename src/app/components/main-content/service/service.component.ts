import { Component } from '@angular/core';
import { servicesDetail } from './service-detail';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent {
  services = servicesDetail;
}
