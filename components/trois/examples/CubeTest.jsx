

// https://www.solidjs.com/docs/latest/api#usecontext
import CObj3D from '../core/components/CObj3D.jsx';
import { createSignal, onMount, onCleanup } from 'solid-js';
//import { useTrois} from "../core/TroisProvider.jsx"

import * as THREE from 'three';
//import useAnimationFrame from "../helpers/useAnimationFrame.js"

const CubeTest = (f => u => {  //function => args
  const _obj3D = f(u); // return {..., data, funs}
  //console.log(_obj3D)
  //console.log("Hello?")
  //console.log(u)//props
  let _Object3D;

  onMount(() => {
    //console.log(_obj3D.getRef())
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshStandardMaterial({
      wireframe:true,
      color:'blue'
    });
    _Object3D = new THREE.Mesh( geometry, material );
    _obj3D.setup(_Object3D);
  });

  onCleanup(()=>{
    //console.log("clean up obj3DBox")
    _obj3D.dispose();
  })

  return _obj3D.render();

})(CObj3D);
//console.log(CObj3DBox)
export default CubeTest;


/*
function CubeTest(props){

  const [{scene}, {addSceneObj, removeSceneObj}] = useTrois();
  const [pos, setPos] = createSignal(props.pos || [0,0,0])
  //console.log(scene)
  //console.log(setScene)
  //console.log("props?.children()")
  //console.log(props?.children())
  //const resolved = children(() => props.children);
  //console.log("resolved")
  //console.log(resolved())

  let ref;
  const id = crypto.randomUUID();
  let mesh;

  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  //const material = new THREE.MeshNormalMaterial();
  //const material = new THREE.WireframeGeometry( geometry );
  const material = new THREE.MeshStandardMaterial({
    wireframe:true,
    color:'blue'
  });
  mesh = new THREE.Mesh( geometry, material );

  mesh.position.set(...pos())

  function updateFrame(time){
    //console.log("Hello")
    //console.log(id)
    //mesh.rotation.x = time / 2000;
    //mesh.rotation.y = time / 1000;
  }

  useAnimationFrame(updateFrame);

  onMount(() => {
    //console.log("CubeTest")
    //console.log(ref)
    if(scene){
      //scene.add(mesh)
      addSceneObj(mesh, id)
    }
    //console.log(divEl.parentNode)//works
  });

  onCleanup(()=>{
    //console.log("clean up object3d mesh")
    //console.log(scene)
    //scene.remove(mesh)
    removeSceneObj(mesh)
  })

  return (  
  <div id={id} ref={ref}>
    {props.children}
  </div>
  )
}

export default CubeTest;
*/