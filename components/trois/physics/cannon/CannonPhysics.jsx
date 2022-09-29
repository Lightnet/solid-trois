/*
  Project Name: solid-trois
  License: MIT
  Created by: Lightnet
*/

import { 
  createSignal
, lazy
, useContext
} from 'solid-js';

import useAnimationFrame from "../../helpers/useAnimationFrame.js"
import * as CANNON from "cannon-es";
import { useCannon } from "../cannon/CannonProvider.jsx"

// https://pmndrs.github.io/cannon-es/docs/

export default function CannonPhysics(props){

  const [stateCannon, {setWorld}] = useCannon();

  let world;

  function init(){
    world = new CANNON.World({
      //gravity: new CANNON.Vec3(0, -9.82, 0), // m/s²
      gravity: new CANNON.Vec3(0, -1.0, 0), // m/s²
    })
    setWorld(world)
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
