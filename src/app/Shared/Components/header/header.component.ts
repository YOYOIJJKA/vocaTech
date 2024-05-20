import { Component } from '@angular/core';
import { CONTENT } from '../../constants';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  panelOpenState: boolean = false;

  content = CONTENT;

  constructor(
    public router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  navigate(element: string) {
    if (this.router.url != '/') {
      this.router.navigateByUrl('/');
      setTimeout(() => {}, 500);
    }
    this.viewportScroller.scrollToAnchor(element);
  }
}
