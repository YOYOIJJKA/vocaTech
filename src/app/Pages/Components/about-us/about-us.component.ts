import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface content {
  title: string;
  text: string;
}
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  firstBox: content[] = [
    {
      title: '850+',
      text: 'городов-присутствия наших заказчиков: в России и за рубежом',
    },
    {
      title: '100%',
      text: 'система анализирует все коммуникации сотрудников и клиентов',
    },
    {
      title: '20 лет',
      text: 'опыта в разработке систем аналитики',
    },
  ];

  secondBox: content[] = [
    {
      title: '+29%',
      text: 'к продажам кредитных карт в банках',
    },
    {
      title: '+21%',
      text: 'к продажам в салонах связи',
    },
    {
      title: 'х2',
      text: 'конверсия из звонка в продаже недвижимости',
    },
  ];

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  navigateToCases() {
    this.router.navigateByUrl('/cases');
  }

  navigate(element: string) {
    if (this.router.url != '/') {
      this.router.navigateByUrl('/');
      setTimeout(() => {}, 500);
    }
    this.viewportScroller.scrollToAnchor(element);
  }
}
