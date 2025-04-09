import { ChangeDetectionStrategy, Component } from '@angular/core';
import { flashAnimation } from '../../flash.animation';

@Component({
  selector: 'app-child-a-1',
  animations: [flashAnimation('400ms')],
  template: `
    <div class="component" [@flashAnimation]="changeDetectionCounter">
      <h1>{{ title }}</h1>
      <hr />

      <h1>CD {{ changeDetectionCounter }}</h1>
      <hr />

      <button (click)="handleClick()">Click me!</button>

      @if (onPush) {
      <div class="on-push">
        <span>OnPush</span>
      </div>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildA1Component {
  changeDetectionCounter = 0;
  onPush = true;

  get title() {
    this.changeDetectionCounter++;
    return 'Child A1';
  }

  handleClick() {
    console.log('[Child A1]: Click event');
  }
}
