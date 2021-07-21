import { Component } from '@angular/core';
import { fadeInAnimation } from './animations';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInAnimation] // register the animation
})
export class AppComponent {
  title = 'aghub';



  ngOnInit(): void {
    AOS.init();
  }
}
