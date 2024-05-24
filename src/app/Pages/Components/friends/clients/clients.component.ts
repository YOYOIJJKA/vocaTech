import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export class ClientsComponent {
  imagesTop = new Array(20).fill(0).map((value, index) => {
    return index%10+1;
  });

  imagesBot = new Array(20).fill(0).map((value, index) => {
    return index%10+11;
  });
}
