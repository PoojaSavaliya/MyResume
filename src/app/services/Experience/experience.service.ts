import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  constructor() {}

  getExperienceDetail() {
    const expDetail = [
      {
        startDate: '01-Jan-2020',
        endDate: '31-Dec-2050',
        company: 'Codex Solution',
        location: 'San Francisco, CA',
        position: 'Project Manager',
        description:
          'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.',
      },
      {
        startDate: '01-Jan-2020',
        endDate: '31-Dec-2050',
        company: 'Soft Solution Ltd',
        location: 'San Francisco, CA',
        position: 'Web Developer',
        description:
          'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.',
      },
      {
        startDate: '01-Jan-2020',
        endDate: '31-Dec-2050',
        company: 'ABC Soft Ltd',
        location: 'San Francisco, CA',
        position: 'Web Designer',
        description:
          'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.',
      },
      {
        startDate: '01-Jan-2020',
        endDate: '31-Dec-2050',
        company: 'Soft Agency',
        location: 'San Francisco, CA',
        position: 'Graphic Designer',
        description:
          'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.',
      },
    ];
    return expDetail;
  }
}
