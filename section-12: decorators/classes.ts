import { Logger, WithTemplate, Log, Log2, Log3, Log4, Autobind } from './decorators';

// Person class with decorators
@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
export class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

// Product class with decorators
export class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive!');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

// Printer class with Autobind decorator
export class Printer {
  message = 'This works!';

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}
