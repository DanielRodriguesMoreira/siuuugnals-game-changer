import { Component, DoCheck } from '@angular/core';
import { flashAnimation } from '../flash.animation';

@Component({
  selector: 'app-child-b',
  animations: [flashAnimation('400ms')],
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
export class ChildBComponent implements DoCheck {
  renderCounter = 0;
  changeDetectionCounter = 0;

  get title() {
    this.renderCounter++;
    return 'Child B';
  }

  handleClick() {
    console.log('[Child B]: Click event');
  }

  ngDoCheck() {
    console.log('[Child B]: Change detection cycle');
    this.changeDetectionCounter++;
  }
}
