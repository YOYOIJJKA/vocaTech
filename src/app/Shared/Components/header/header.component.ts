import { Component } from '@angular/core';
import { CONTENT } from '../../constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  panelOpenState: boolean = false;

  content = CONTENT;
}
