import { Component, DoCheck } from '@angular/core';
import { flashAnimation } from '../flash.animation';

@Component({
  selector: 'app-child-a',
  animations: [flashAnimation('200ms')],
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
export class ChildAComponent implements DoCheck {
  renderCounter = 0;
  changeDetectionCounter = 0;

  get title() {
    this.renderCounter++;
    return 'Child A';
  }

  handleClick() {
    console.log('[Child A]: Click event');
  }

  ngDoCheck() {
    console.log('[Child A]: Change detection cycle');
    this.changeDetectionCounter++;
  }
}
