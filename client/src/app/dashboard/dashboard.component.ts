import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
  public alerts: Array<any> = [];
  public sliders: Array<any> = [];

  constructor() {
      this.sliders.push(
          {
              imagePath: 'assets/images/cr2.jpg',
              label: '',
              text:
                  'Plunge into the wonderful world of reading.'
          },
          {
              imagePath: 'assets/images/cr3.jpg',
              label: '',
              text: 'I have found the most valuable thing in my wallet is my library card.'
          },
          {
              imagePath: 'assets/images/cr4.jpg',
              label: '',
              text:
                  'Libraries always remind me that there are good things in this world.'
          },
          {
              imagePath: 'assets/images/cr5.jpg',
              label: '',
              text:
                  'I discovered me in the library. I went to find me in the library.'
          }
      );

  }

  ngOnInit() {}

}
