import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrl: './advantages.component.scss',
})
export class AdvantagesComponent {
  advantages = [
    {
      title: 'Облачные и физические модели работы',
      text: 'Работаем SaaS и On-Premise',
      img: './assets/cloud.png',
    },
    {
      title: 'Российское производство и разработка ПО',
      text: 'Производсвтенные мощности позволяют выпускать до 15 тысяч устройств в год',
      img: './assets/tech.png',
    },
    {
      title: 'Техническая поддержка',
      text: 'От Калининграда до Владивостока',
      img: './assets/phone.png',
    },
  ];

  constructor(
    private router: Router,
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
