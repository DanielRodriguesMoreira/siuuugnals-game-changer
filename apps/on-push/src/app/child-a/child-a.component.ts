import { Component } from '@angular/core';
import { ChildA2Component } from './child-a-2/child-a-2.component';
import { ChildA1Component } from './child-a-1/child-a-1.component';
import { flashAnimation } from '../flash.animation';

@Component({
  selector: 'app-child-a',
  animations: [flashAnimation('200ms')],
  imports: [ChildA2Component, ChildA1Component],
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
    <div class="children-connector"></div>
    <div class="children">
      <app-child-a-1 />
      <app-child-a-2 />
    </div>
  `,
})
export class ChildAComponent {
  changeDetectionCounter = 0;
  onPush = false;

  get title() {
    this.changeDetectionCounter++;
    return 'Child A';
  }

  handleClick() {
    console.log('[Child A]: Click event');
  }
}
