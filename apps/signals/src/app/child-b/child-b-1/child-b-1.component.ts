import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { flashAnimation } from '../../flash.animation';

@Component({
  selector: 'app-child-b-1',
  animations: [flashAnimation('1000ms')],
  template: `
    <div class="component" [@flashAnimation]="changeDetectionCounter">
      <h1>{{ title }}</h1>
      <hr />

      <h1>CD: {{ changeDetectionCounter }}</h1>
      <h1>Signal: {{ counterSignal() }}</h1>
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
export class ChildB1Component {
  changeDetectionCounter = 0;
  onPush = true;

  counterSignal = signal(0);

  get title() {
    this.changeDetectionCounter++;
    return 'Child B1';
  }

  handleClick() {
    console.log('[Child B1]: Click event');
  }
}
