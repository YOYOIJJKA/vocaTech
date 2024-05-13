import { Component } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.scss',
})
export class SlideComponent {
  isActive: boolean = false;
  isActive1: boolean = false;

  toggle() {
    this.isActive = !this.isActive;
    setTimeout(() => {
      this.isActive1 = !this.isActive1;
    }, 400);
  }
}
