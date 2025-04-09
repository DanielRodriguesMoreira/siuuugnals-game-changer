import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="component">
      <h1>Siuuugnals!</h1>
      <hr />

      <h1>Counter: {{ counter }}</h1>
      <hr />

      <button (click)="handleClick()">Click me!</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  counter = 0;

  handleClick() {
    this.counter = this.counter + 1;
  }
}
