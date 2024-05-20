import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  BoxContent,
  Img,
  ImgContent,
  VideoContent,
} from '../../Shared/Interfaces/content';

@Component({
  selector: 'app-case-page',
  templateUrl: './case-page.component.html',
  styleUrl: './case-page.component.scss',
})
export class CasePageComponent {
  content: ImgContent;
  videoContent: VideoContent = {
    title: 'Видео',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  };
  boxContent: BoxContent = {
    title: 'Ритейл',
    boxes: [
      {
        title: `Как экспертиза сотрудников влияет на продажи в алкогольном ритейле?`,
        subtitle: `Выясняем причинно-следственные связи и показываем точки роста благодаря речевой аналитике.`,
        text: [
          `Один из важных проектов компании был успешно реализован в крупной сети алкогольных магазинов. 
        Целью данного проекта было улучшение качества обслуживания клиентов, 
        повышение продаж и снижение операционных расходов. 
        Для достижения этих целей были внедрены системы речевой аналитики, 
        что позволило автоматизировать процесс работы с сотрудниками — от качества обслуживания до бизнес-показателей.`,
          `
        Кроме того, благодаря анализу речи сотрудников магазина, были выявлены проблемы 
        в коммуникации с клиентами и определены причины их недовольства. 
        На основе этих данных проводились специальные тренинги для сотрудников,
         что существенно улучшило качество обслуживания.`,
        ],
        src: './assets/content/1.png',
      },
    ],
  };
  images: Img[] = [
    {
      src: './assets/example.png',
      style: 'big',
    },
    {
      src: './assets/example.png',
      style: 'small',
    },
    {
      src: './assets/example.png',
      style: 'small',
    },
    {
      src: './assets/example.png',
      style: 'small',
    },
    {
      src: './assets/example.png',
      style: 'small',
    },
    {
      src: './assets/example.png',
      style: 'big',
    },
  ];

  constructor(public router: Router) {
    this.content = {
      title: 'Кейсы',
      img: this.images,
    };
  }
}
