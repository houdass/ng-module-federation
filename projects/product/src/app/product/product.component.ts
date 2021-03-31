import { Component } from '@angular/core';
import { CounterService } from 'shared-lib';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  constructor(public counterService: CounterService) {}

  increment(): void {
    this.counterService.increment();
  }
}
