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

```jsx
<Rerender>
  <Scene>
    <Object3D>
    </Object3D>
  </Scene>
<Rerender>
```

  One is html element. By using the id tag to parent object3D. By using the context to update variables by using the solidjs framework. To test how well the accessing render and root app nodes.

```jsx
  export default function CMesh(props) {

    const id = crypto.randomUUID();
    //...
    //reason for need for id for child/parent in case of multiple scenes

    mesh = new THREE.Mesh(geometry, material);
    return (<div>
      {props.children}
    </div>);
  }

  function Scene(props){

    let canvas;
    let renderer;
    const id = crypto.randomUUID();

    //...

    onMount(() => {
    //...
    renderer = new THREE.WebGLRenderer( { antialias: true,canvas:canvas } );
    });

    return (<canvas id={id} ref={canvas}>
    {props.children}
    </canvas>)
  }
```
  
  Two is to return object class instead of html element from threejs canvas scene render as children.

```jsx
  export default function EMesh(props) {
    //...

    mesh = new THREE.Mesh(geometry, material);
    return {mesh, props};
  }

  function Scene(props){

    let canvas;
    let renderer;
    const id = crypto.randomUUID();

    const resolved = children(() => props.children);//watch update changes

    createEffect(() => {
      for(const eObj3D of resolved()){
        console.log(eObj3D)
        if(eObj3D?.mesh){
          if(eObj3D.mesh instanceof THREE.Mesh){
            console.log("FOUND MESH",eObj3D.mesh)
            scene.add(eObj3D.mesh)
          }
        }
        if(eObj3D instanceof THREE.DirectionalLight){
          //console.log("FOUND instanceof DirectionalLight")
          //console.log(eObj3D)
          scene.add(eObj3D)
        }
      }
      //console.log("scene: >>> :" ,scene )
    });

    onMount(() => {
    //...
    renderer = new THREE.WebGLRenderer( { antialias: true,canvas:canvas } );
    });

    return (<canvas id={id} ref={canvas}>
      {props.children}
    </canvas>)
  }
```

  There are many ways to setup but need some way to easy access.

  To create UI for game, editor and debuging the scene render and controls.

  As well with cannon physics.

```jsx
<CannonPhysics>
  <Rerender>
    <Scene>
      <Object3D>
        <Physics></Physics>
      </Object3D>
    </Scene>
  <Rerender>
</CannonPhysics>
```
  Note it is subject to change. Still testing and name files might not match.

  One reason is to have module build in some ways handle object3D, material,

# cannon-es physics:
  Note the shape object may need some filter check types.

- Box have mesh
- Sphere have radius and no mesh data.
- Plane is infinitely.

# Solidjs:
 - https://www.solidjs.com/

# Threejs Refs:
 - https://github.com/troisjs/trois
 - https://github.com/pmndrs/react-three-fiber
 - https://github.com/pmndrs/cannon-es
 - https://codesandbox.io/s/solid-gl-boxes-lmpei

  Learn some basic understanding.

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
 - https://codesandbox.io/s/solid-gl-boxes-lmpei
