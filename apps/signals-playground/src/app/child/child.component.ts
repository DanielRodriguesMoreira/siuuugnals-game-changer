import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h1>Counter: {{ counter }}</h1>
    <button (click)="handleClick()">Reset counter</button>
  `,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ChildComponent {
  @Input() counter = 0;

  @Output() resetCounter = new EventEmitter<number>();

  handleClick() {
    // empty by design
  }
}
