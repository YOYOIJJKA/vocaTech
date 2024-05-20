import { Component, Input } from '@angular/core';
import { BoxContent } from '../../Interfaces/content';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-block-content',
  templateUrl: './block-content.component.html',
  styleUrl: './block-content.component.scss',
})
export class BlockContentComponent {
  @Input()
  content?: BoxContent;

  constructor(public sanitizer: DomSanitizer) {}

  sanitize(url: string | undefined) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url ?? '');
  }
}
