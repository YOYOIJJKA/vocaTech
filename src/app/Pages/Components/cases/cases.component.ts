import { Component } from '@angular/core';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrl: './cases.component.scss'
})
export class CasesComponent {

  cases = [
    {
      title: 'Ритейл',
      text: 'few words'
    },
    {
      title: 'Банки',
      text: 'few Words About Banks'
    },
    {
      title: 'Телеком',
      text: 'few'
    },
    {
      title: 'Девелопмент',
      text: 'few'
    },
    {
      title: 'АЗС',
      text: 'Пара слов об АЗС'
    },
    {
      title: 'Госучреждения',
      text: 'Пара слов о гос'
    }
  ];

}
