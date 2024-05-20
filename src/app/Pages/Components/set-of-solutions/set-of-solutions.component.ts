import { Component } from '@angular/core';

@Component({
  selector: 'app-set-of-solutions',
  templateUrl: './set-of-solutions.component.html',
  styleUrl: './set-of-solutions.component.scss',
})
export class SetOfSolutionsComponent {
  set = [
    {
      title: 'WI-FI аудиобейджи',
      img: './assets/wifi.png',
      color: 'light-blue',
    },
    {
      title: 'WI-FI микрофоны',
      img: './assets/micro.png',
      color: 'light-green',
    },
    {
      title: 'Bluetooth наушники',
      img: './assets/headphones.png',
      color: 'light-orange',
    },
    {
      title: 'Приложения для смартфонов и планшетов',
      img: './assets/iphone.png',
      color: 'light-green',
    },
    {
      title: 'Клиентские системы и устройства записи',
      img: './assets/monitor.png',
      color: 'light-blue',
    },
  ];
}
