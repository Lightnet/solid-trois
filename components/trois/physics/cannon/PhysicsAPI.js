/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

// https://pmndrs.github.io/cannon-es/examples/collision_filter
// https://pmndrs.github.io/cannon-es/examples/collisions
// https://pmndrs.github.io/cannon-es/
// https://pmndrs.github.io/cannon-es/examples/trigger

export const GROUP1 = 1;
export const GROUP2 = 2;
export const GROUP3 = 4;
export const GROUP4 = 8;
export const GROUP5 = 16;

/*
const triggerBody = new CANNON.Body({ isTrigger: true })
triggerBody.addEventListener('collide', (event) => {
          if (event.body === sphereBody) {
            console.log('The sphere entered the trigger!', event)
          }
        })
        world.addEventListener('endContact', (event) => {
          if (
            (event.bodyA === sphereBody && event.bodyB === triggerBody) ||
            (event.bodyB === sphereBody && event.bodyA === triggerBody)
          ) {
            console.log('The sphere exited the trigger!', event)
          }
        })
      })

*/