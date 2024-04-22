import { Component, inject } from '@angular/core';
import { RectangleComponent } from './rectangle/component';
import { RectangleStore } from './store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RectangleComponent,
  ],
  templateUrl: 'component.html',
  styleUrl: 'component.scss',
  providers: [
    RectangleStore,
  ]
})
export class AppComponent {

  protected _store = inject(RectangleStore);

}
