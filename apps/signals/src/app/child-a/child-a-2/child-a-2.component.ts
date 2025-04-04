import { Component } from '@angular/core';
import { flashAnimation } from '../../flash.animation';

@Component({
  selector: 'app-child-a-2',
  animations: [flashAnimation('600ms')],
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
export class ChildA2Component {
  changeDetectionCounter = 0;
  onPush = false;

  get title() {
    this.changeDetectionCounter++;
    return 'Child A2';
  }

  handleClick() {
    console.log('[Child A2]: Click event');
  }
}
