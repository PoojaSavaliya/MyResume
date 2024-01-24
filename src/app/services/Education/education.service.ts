import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  constructor() {}

  educationDetail() {
    const eduDetail = [
      {
        startDate: '01-Jan-2020',
        endDate: '31-Dec-2050',
        degree: 'Master Degree',
        description:
          'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.',
      },
      {
        startDate: '01-Jan-2020',
        endDate: '31-Dec-2050',
        degree: 'Bachelor Degree',
        description:
          'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.',
      },
      {
        startDate: '01-Jan-2020',
        endDate: '31-Dec-2050',
        degree: 'Master Degree',
        description:
          'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.',
      },
      {
        startDate: '01-Jan-2020',
        endDate: '31-Dec-2050',
        degree: 'Bachelor Degree',
        description:
          'Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero.',
      },
    ];
    return eduDetail;
  }
}
