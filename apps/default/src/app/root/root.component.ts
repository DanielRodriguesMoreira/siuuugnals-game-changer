import { Component } from '@angular/core';
import { flashAnimation } from '../flash.animation';

@Component({
  selector: 'app-parent',
  animations: [flashAnimation()],
  template: `
    <div class="component" [@flashAnimation]="changeDetectionCounter">
      <h1>{{ title }}</h1>
      <hr />

      <h1>CD: {{ changeDetectionCounter }}</h1>
      <hr />

      <button (click)="handleClick()">Click me!</button>

      @if (onPush) {
        <div class="on-push">
          <span>OnPush</span>
        </div>
      }
    </div>
  `
})
export class RootComponent {
  changeDetectionCounter = 0;
  onPush = false;

  get title() {
    this.changeDetectionCounter++;
    return 'Root';
  }

  handleClick() {
    console.log('[Root]: Click event');
  }
}
