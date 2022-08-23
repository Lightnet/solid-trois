



import { 
  createSignal
, lazy
} from 'solid-js';

import useAnimationFrame from "../../helpers/useAnimationFrame.js"
import * as CANNON from "cannon-es";

// https://pmndrs.github.io/cannon-es/docs/

export default function CannonPhysics(props){

  let world;

  function init(){
    world = new CANNON.World({
      gravity: new CANNON.Vec3(0, -9.82, 0), // m/s²
    })
  }

  function updateFrame() {
    //console.log("UPDATE PHYSICS")
    if(world){
      world.fixedStep()
    }
  }

  init()

  //useEffect and clean up base on react
  useAnimationFrame(updateFrame);
  
  return (<>
    {props.children}
  </>)
}
