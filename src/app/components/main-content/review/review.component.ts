import { Component } from '@angular/core';
import { reviewDetail } from './review-detail';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
  animations: [
    trigger('slideInOut', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition('* => void', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class ReviewComponent {
  reviews = reviewDetail;
  activeReviewIndex = 0;

  nextReview() {
    this.activeReviewIndex++;
    if (this.activeReviewIndex === this.reviews.length) {
      this.activeReviewIndex = 0;
    }
  }

  prevReview() {
    this.activeReviewIndex--;
    if (this.activeReviewIndex < 0) {
      this.activeReviewIndex = this.reviews.length - 1;
    }
  }
}
