import { Component } from '@angular/core';
import { CounterService } from 'shared-lib';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
})
export class CustomerComponent{
  constructor(public counterService: CounterService) {}

  increment(): void {
    this.counterService.increment();
  }
}
