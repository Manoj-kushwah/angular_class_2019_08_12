import { Component } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  marks = 450;
  constructor(private appService: AppService) {
    console.log('AppComponent: appService: ', appService);
  }
}
