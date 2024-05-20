import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  items = [
    {
      title: 'Ритейл',
      url: 'retail',
    },
    {
      title: 'Банки',
      url: 'banks',
    },
    {
      title: 'Телеком',
      url: 'telecom',
    },
    {
      title: 'Девелопмент',
      url: 'development',
    },
    {
      title: 'Сфера услуг',
      url: 'services',
    },
    {
      title: 'Госучреждения',
      url: 'goverment',
    },
  ];

  constructor(public router: Router) {}

  goTo(url: string) {
    this.router.navigateByUrl('/' + url);
  }
}
