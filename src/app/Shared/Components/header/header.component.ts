import { Component } from '@angular/core';

interface content {
  label: string;
  elementId: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  panelOpenState: boolean = false;

  content: content[] = [
    {
      label: 'О нас',
      elementId: 'aboutUs',
    },
    {
      label: 'Решения для бизнеса',
      elementId: 'solutions',
    },
    {
      label: 'Кейсы',
      elementId: 'cases'
    },
    {
      label: 'Арсенал Решений',
      elementId: 'asset'
    },
    {
      label: 'Наши преимущества',
      elementId: 'advantages'
    }
  ];
}
