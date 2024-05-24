import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrl: './cases.component.scss',
})
export class CasesComponent {
  cases = [
    {
      title: 'Ритейл',
      text: 'Пара слов о ритейле',
    },
    {
      title: 'Банки',
      text: 'Пара слов о банках',
    },
    {
      title: 'Телеком',
      text: 'Пара слов о телекоме',
    },
    {
      title: 'Девелопмент',
      text: 'Пара слов о девелопменте',
    },
    {
      title: 'АЗС',
      text: 'Пара слов об АЗС',
    },
    {
      title: 'Госучреждения',
      text: 'Пара слов о госучреждениях',
    },
  ];

  constructor(private router: Router) {}

  navigateToCases() {
    this.router.navigateByUrl('/cases');
  }
}
