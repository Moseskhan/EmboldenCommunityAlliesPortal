import { Component } from '@angular/core';
import { storage, initializeApp } from 'firebase';
import { environment } from '../environments/environment.prod';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(
		
    ) {
  
      initializeApp(environment.firebase);
    }
}
