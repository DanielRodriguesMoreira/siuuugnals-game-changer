import { Component } from '@angular/core';
import { RootComponent } from './root/root.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { ChildA1Component } from './child-a/child-a-1/child-a-1.component';
import { ChildA2Component } from './child-a/child-a-2/child-a-2.component';
import { ChildB1Component } from './child-b/child-b-1/child-b-1.component';

@Component({
  selector: 'app-root',
  template: `
    <app-parent />
    <div class="children">
      <app-child-a />
      <app-child-b />
    </div>
    <div class="grandchildren">
      <div class="group">
        <app-child-a-1 />
        <app-child-a-2 />
      </div>
      <div class="group">
        <app-child-b-1 />
      </div>
    </div>
  `,
  imports: [
    RootComponent,
    ChildAComponent,
    ChildBComponent,
    ChildA1Component,
    ChildA2Component,
    ChildB1Component,
  ],
})
export class AppComponent {}
