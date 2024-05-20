import { Component, Input, OnInit } from '@angular/core';
import { Img, ImgContent } from '../../Interfaces/content';

@Component({
  selector: 'app-img-content',
  templateUrl: './img-content.component.html',
  styleUrl: './img-content.component.scss',
})
export class ImgContentComponent implements OnInit {
  @Input()
  content?: ImgContent;

  firstImg?: Img[];
  secondImg?: Img[];

  constructor() {}

  ngOnInit() {
    if (this.content) {
      this.firstImg = [
        ...this.content.img.slice(0, this.content.img.length / 2),
      ];
      this.secondImg = [...this.content.img.slice(this.content.img.length / 2)];
    }
  }
}
