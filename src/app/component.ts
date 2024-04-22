import { Component, QueryList, ViewChildren, computed, signal, viewChildren } from '@angular/core';
import { RectangleComponent } from './rectangle/component';
import { Rectangle } from './rectangle/model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RectangleComponent,
  ],
  templateUrl: 'component.html',
  styleUrl: 'component.scss',
})
export class AppComponent {

  #testArray = signal(Array.from({ length: 50 }));

  protected _rectangles = computed<ReadonlyArray<Rectangle>>(() => this.#testArray().map((_, index) => ({ index, hue: this.#getHue(index) })));

  #getHue(index: number): number {
    return index / this.#testArray().length * 360 % 360;
  }

  protected _onRectangleChange(rectangle: Rectangle): void {
    console.log(rectangle);
  }

}
