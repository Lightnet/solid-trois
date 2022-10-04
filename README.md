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

  There are different way to set up the threejs render.

  By using the context to handle object3D.


```
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

# Features:
- dev vite server
- threejs
- cannon-es physics
- ui editor

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
