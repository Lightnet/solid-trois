# solid-trois

# Packges:
- vite
- solid-js
- three
- cannon-es

# Status:
- idea
- prototyping
- Testing...

# Information:
  
  Note this is just prototype build. 

  There are different way to handle Threejs render set up. By using the context to element handle object3D. Still work in progress testing.


```
Trois
 - context
 - object3Ds
  - Word Physics
    - context
  - Rerender (canvas)
    - Scene
      - get root context 
      - object3D list
    - Object3D
      - get scene context 
      - mount
        - add object to scene
      - unmount/cleanup
        - remove object to scene
      - cannon Physics
        - add 
        - remove
        - update
        - reset
        - pause
```
  To have multple renders or scenes to handle viewports or canvas draw for world and mini map.

# Features:
- dev vite server
- threejs
- cannon-es physics
- ui editor (work in progress)

# setup:
 Nodejs
```
npm install 
npm run dev
```

# Links:
 - https://www.youtube.com/watch?v=hw3Bx5vxKl0
 - https://github.com/solidjs/vite-plugin-solid
 - https://www.solidjs.com/docs/latest/api#createcontext
 - https://codesandbox.io/s/solid-gl-boxes-lmpei
