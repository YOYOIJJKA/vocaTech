import { Component, Input, OnInit } from '@angular/core';
import { VideoContent } from '../../Interfaces/content';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-content',
  templateUrl: './video-content.component.html',
  styleUrl: './video-content.component.scss',
})
export class VideoContentComponent implements OnInit {
  @Input()
  content?: VideoContent;

  url?: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    if (this.content?.src) {
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.content.src);
    }
  }
}
