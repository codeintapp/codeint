// import the required animation functions from the angular animations module
import { trigger, animate, transition, style, query } from '@angular/animations';

export const fadeInAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('fadeInAnimation', [

      transition( '* => *', [

          query(':enter',
              [
                  style({ opacity: 0 })
              ],
              { optional: true }
          ),

          query(':leave',
              [
                  style({ opacity: 1 }),
                  animate('0.5s', style({ opacity: 0 }))
              ],
              { optional: true }
          ),

          query(':enter',
              [
                  style({ opacity: 0 }),
                  animate('0.5s', style({ opacity: 1 }))
              ],
              { optional: true }
          )

      ])
    ]);
