import { animate, keyframes, style, transition, trigger } from '@angular/animations';

export function flashAnimation(delay = '0ms') {
  return trigger('flashAnimation', [
    transition(':increment', [
      animate(`500ms ${delay}`, keyframes([
        style({ backgroundColor: 'red', offset: 1 })
      ]))
    ])
  ])
}
