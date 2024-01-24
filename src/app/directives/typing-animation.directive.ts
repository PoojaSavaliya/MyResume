import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appTypingAnimation]',
})
export class TypingAnimationDirective implements OnInit, OnDestroy {
  @Input() text: string = '';
  private intervalId: any;
  private currentIndex: number = 0;
  private textArray: string[] = [];

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.textArray = this.text.split(',').map((item) => item.trim());
    this.startTypingAnimation();
  }

  ngOnDestroy() {
    this.stopTypingAnimation();
  }

  private startTypingAnimation() {
    const element = this.el.nativeElement;

    this.intervalId = setInterval(() => {
      if (this.currentIndex < this.textArray.length) {
        element.textContent = this.textArray[this.currentIndex];
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    }, 1000);
  }

  private stopTypingAnimation() {
    clearInterval(this.intervalId);
  }
}
