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
      text: 'городов в России, Казахстане и Узбекистане',
    },
    {
      title: 'до 100%',
      text: 'коммуникаций анализируется автоматически',
    },
    {
      title: '20 лет',
      text: 'производства электроники',
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

  constructor(private router: Router) {}

  navigateToCases() {
    this.router.navigateByUrl('/cases');
  }
}
