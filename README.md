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
  
  Note this is just prototype build. By using the context to update variables by using the solidjs framework. To test how well the accessing render and root nodes.

  There are different way to set up the three element format.

  One is html element or two object from parent is canvas scene render.

  There are many ways to setup but need some way to easy access.

  To create UI for game, editor and debuging the scene render and controls.

  As well with cannon physics.


# Design:

```jsx
<Trois context>
  <Scene>
    <Object3D>
      <Physics></Physics>
    </Object3D>
  </Scene>
</Trois>
```

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
- 

# setup:
 Nodejs
```
npm install 
npm run dev
```


```js
import h from 'solid-js/h';
import html from 'solid-js/html'
```


# Links:
 - https://www.youtube.com/watch?v=hw3Bx5vxKl0
 - https://github.com/solidjs/vite-plugin-solid
 - https://www.solidjs.com/docs/latest/api#createcontext
 - https://codesandbox.io/s/solid-gl-boxes-lmpei?file=/solid-three.js:1910-1914
