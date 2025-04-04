import { Component } from '@angular/core';
import { ChildB1Component } from './child-b-1/child-b-1.component';
import { flashAnimation } from '../flash.animation';

@Component({
  selector: 'app-child-b',
  animations: [flashAnimation('800ms')],
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
    <div class="single-children-group">
      <div class="single-children-connector"></div>
      <app-child-b-1 />
    </div>
  `,
  imports: [ChildB1Component]
})
export class ChildBComponent {
  changeDetectionCounter = 0;
  onPush = false;

  get title() {
    this.changeDetectionCounter++;
    return 'Child B';
  }

  handleClick() {
    console.log('[Child B]: Click event');
  }
}
