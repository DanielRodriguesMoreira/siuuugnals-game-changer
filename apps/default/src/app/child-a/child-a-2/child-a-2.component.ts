import { Component, DoCheck } from '@angular/core';
import { flashAnimation } from '../../flash.animation';

@Component({
  selector: 'app-child-a-2',
  animations: [flashAnimation('800ms')],
  template: `
    <div class="component" [@flashAnimation]="renderCounter">
      <h1>{{ title }}</h1>
      <hr />
      <h3>Render: {{ renderCounter }}</h3>
      <h3>CD cycles: {{ changeDetectionCounter }}</h3>
      <hr />
      <button (click)="handleClick()">Click me!</button>
    </div>
  `
})
export class ChildA2Component implements DoCheck {
  renderCounter = 0;
  changeDetectionCounter = 0;

  get title() {
    this.renderCounter++;
    return 'Child A2';
  }

  handleClick() {
    console.log('[Child A2]: Click event');
  }

  ngDoCheck() {
    console.log('[Child A2]: Change detection cycle');
    this.changeDetectionCounter++;
  }
}
