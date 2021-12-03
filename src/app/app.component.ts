import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'feed-my-animals';

  goToBarn() {
    console.log('barn');
  }

  goToHouse() {
    console.log('house');
  }
}
