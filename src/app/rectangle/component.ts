import { Component, HostBinding, HostListener, Input, input, output } from '@angular/core';
import { Rectangle } from './model';

@Component({
  selector: 'rectangle',
  standalone: true,
  imports: [],
  templateUrl: 'component.html',
  styleUrl: 'component.scss',
})
export class RectangleComponent {

  @HostBinding('style.--hue') protected get hue(): number {
    return this.rectangle().hue;
  }

  @HostListener('click', ['$event']) onRectangleChange() {
    this.rectangleChange.emit(this.rectangle());
  }
  
  public rectangleChange = output<Rectangle>();

  public rectangle = input.required<Rectangle>();

}
