import { Component } from '@angular/core';
import { captureException } from '@sentry/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Puppy Error';

  puppy;

onAddError() {
  captureException('Error logged! No more puppies' );
  console.log('check Sentry Project for error logs');

}


}
