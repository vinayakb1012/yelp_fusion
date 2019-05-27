import { Component } from '@angular/core';
import { RestService } from './services/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NYC restos';

  nycrestos: any;

  constructor(private yelpFusionApiService: RestService) {
    this.yelpFusionApiService.getNYCrestos()
    .subscribe((response) => {
      console.log('response', response);
      this.nycrestos = response;
    })
  } 
}
