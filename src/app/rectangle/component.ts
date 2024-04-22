import { Component, HostBinding, HostListener, input, output } from '@angular/core';
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

  @HostListener('click', ['$event']) protected _leftClick(): boolean {
    this.duplicate.emit(this.rectangle());
    return false;
  }

  @HostListener('contextmenu', ['$event']) protected _rightClick() {
    this.remove.emit(this.rectangle());
    return false;
  }
  
  public duplicate = output<Rectangle>();
  public remove = output<Rectangle>();

  public rectangle = input.required<Rectangle>();

}
