import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { flashAnimation } from './flash.animation';

@Component({
  selector: 'app-root',
  animations: [flashAnimation()],
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

    <div class="children-connector"></div>
    <div class="children">
      <app-child-a />
      <app-child-b />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ChildAComponent, ChildBComponent]
})
export class AppComponent {
  changeDetectionCounter = 0;
  onPush = true;

  get title() {
    this.changeDetectionCounter++;
    return 'Root';
  }

  handleClick() {
    console.log('[Root]: Click event');
  }
}
