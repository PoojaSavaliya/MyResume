import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content-header',
  templateUrl: './main-content-header.component.html',
  styleUrls: ['./main-content-header.component.css'],
})
export class MainContentHeaderComponent {
  profile = {
    name: 'Michael Miller',
    title:
      'Web Designer, Web Developer, Front End Developer, Apps Developer, Graphic Designer',
  };
}
