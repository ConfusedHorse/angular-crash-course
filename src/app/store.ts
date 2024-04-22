import { computed } from "@angular/core";
import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { INITIAL_STATE, getHue, splice } from "./model";
import { Rectangle } from "./rectangle/model";

export const RectangleStore = signalStore(
  withState(INITIAL_STATE),
  withComputed(({ rectangles }) => ({
    rectanglesWithHue: computed<ReadonlyArray<Rectangle>>(() => rectangles().map((rectangle, index) => ({ hue: getHue(index, rectangles().length), ...rectangle, index }))),
  })),
  withMethods((store) => ({
    duplicate(rectangle: Rectangle): void {
      patchState(store, splice(rectangle, 'duplicate'));
    },
    remove(rectangle: Rectangle): void {
      patchState(store, splice(rectangle, 'remove'));
    },
  })),
)
