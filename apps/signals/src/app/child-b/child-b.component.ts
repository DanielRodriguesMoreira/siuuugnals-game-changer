import { Component, computed, DoCheck, effect, signal } from '@angular/core';
import { flashAnimation } from '../flash.animation';

@Component({
  selector: 'app-child-b',
  animations: [flashAnimation('400ms')],
  template: `
    <div class="component with-on-push">
      <h1>{{ title }}</h1>
      <hr />
      <div [@flashAnimation]="signalX()">
        <h3>Signal X: {{ signalX() }}</h3>
      </div>
      <div [@flashAnimation]="signalY()">
        <h3>Signal Y: {{ signalY() }}</h3>
      </div>
      <h3>CD cycles: {{ changeDetectionCounter }}</h3>
      <hr />
      <button (click)="handleClickX()">Update Signal X</button>
      <button (click)="handleClickY()">Update Signal Y</button>
    </div>
  `
})
export class ChildBComponent implements DoCheck {
  signalX = signal(0);
  signalY = signal(0);
  changeDetectionCounter = 0;

  constructor() {
    effect(() => {
      console.log(`[Child B - Signal X]: Render: ${this.signalX()}`);
    });

    effect(() => {
      console.log(`[Child B - Signal Y]: Render: ${this.signalY()}`);
    });
  }

  get title() {
    return 'Child B';
  }

  handleClickX() {
    this.signalX.update(value => value + 1);
    console.log('[Child B]: Update Signal X event');
  }

  handleClickY() {
    this.signalY.update(value => value + 1);
    console.log('[Child B]: Update Signal Y event');
  }

  ngDoCheck() {
    console.log('[Child B]: Change detection cycle');
    this.changeDetectionCounter++;
  }
}
