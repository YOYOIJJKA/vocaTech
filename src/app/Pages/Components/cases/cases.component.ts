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
      title: 'РИТЕЙЛ',
      text: 'Пара слов о ритейле',
    },
    {
      title: 'БАНКИ',
      text: 'Пара слов о банках',
    },
    {
      title: 'ТЕЛЕКОМ',
      text: 'Пара слов о телекоме',
    },
    {
      title: 'ДЕВЕЛОПМЕНТ',
      text: 'Пара слов о девелопменте',
    },
    {
      title: 'АЗС',
      text: 'Пара слов об АЗС',
    },
    {
      title: 'ГОСУЧРЕЖДЕНИЯ',
      text: 'Пара слов о госучреждениях',
    },
  ];

  constructor(private router: Router) {}

  navigateToCases() {
    this.router.navigateByUrl('/cases');
  }
}
