import { Component, OnInit } from '@angular/core';
import { WakeService } from './services/wake.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'shopping-app-frontend';

  constructor(private wakeService: WakeService) {}

  ngOnInit() {
    this.wakeService.wakeAll().subscribe({
      next: () => console.log('Backend awake'),
      error: () => console.log('Waking backend...')
    });
  }
}