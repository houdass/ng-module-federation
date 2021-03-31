import { Component } from '@angular/core';
import { CounterService } from 'shared-lib';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
})
export class TrackingComponent {
  constructor(public counterService: CounterService) {}

  increment(): void {
    this.counterService.increment();
  }
}
