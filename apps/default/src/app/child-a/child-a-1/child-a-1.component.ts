import { Component, DoCheck } from '@angular/core';
import { flashAnimation } from '../../flash.animation';

@Component({
  selector: 'app-child-a-1',
  animations: [flashAnimation('600ms')],
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
export class ChildA1Component implements DoCheck {
  renderCounter = 0;
  changeDetectionCounter = 0;

  get title() {
    this.renderCounter++;
    return 'Child A1';
  }

  handleClick() {
    console.log('[Child A1]: Click event');
  }

  ngDoCheck() {
    console.log('[Child A1]: Change detection cycle');
    this.changeDetectionCounter++;
  }
}
