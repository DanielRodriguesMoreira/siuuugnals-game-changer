import { Component } from '@angular/core';
import { RootComponent } from './root/root.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';

@Component({
  selector: 'app-root',
  template: `
    <app-parent />
    <div class="children-connector"></div>
    <div class="children">
      <app-child-a />
      <app-child-b />
    </div>
  `,
  imports: [
    RootComponent,
    ChildAComponent,
    ChildBComponent,
    ChildAComponent,
    ChildBComponent,
    RootComponent,
  ],
})
export class AppComponent {}
