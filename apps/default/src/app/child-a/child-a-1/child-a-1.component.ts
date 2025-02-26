import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child-a-1',
  template: `
    <div class="component">
      <h1>{{ title }}</h1>
      <hr />
      <h3>Render: {{ renderCounter }}</h3>
      <h3>CD: {{ changeDetectionCounter }}</h3>
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
    return 'Child A - 1';
  }

  handleClick() {
    console.log('Siuuu!!!');
  }

  ngDoCheck() {
    this.changeDetectionCounter++;
  }
}
