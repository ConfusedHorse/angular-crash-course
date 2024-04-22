import { Rectangle } from "./rectangle/model";

export interface RectangleState {
  rectangles: ReadonlyArray<Partial<Rectangle>>;
  rectanglesWithHue: ReadonlyArray<Rectangle>;
}

export const INITIAL_STATE: RectangleState = {
  rectangles: Array.from({ length: 10 }).map((_, index) => ({ index })),
  rectanglesWithHue: [],
}

export function getHue(index: number, length: number): number {
  return index / length * 360 % 360;
}

export function splice<T extends Partial<RectangleState>>(rectangle: Rectangle, operation: 'duplicate' | 'remove' = 'duplicate') {
  return (state: T) => {
    const rectangles = Array.from(state.rectangles ?? []);
    if (rectangles.length <= 1) {
      return state;
    }
    switch(operation) {
      case 'duplicate': rectangles.splice(rectangle.index, 0, rectangle); break;
      case 'remove': rectangles.splice(rectangle.index, 1); break;
    }
    return { rectangles };
  }
}
