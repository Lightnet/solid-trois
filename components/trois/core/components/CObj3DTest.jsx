


import CObject3D from "./CObject3D.jsx"

console.log(CObject3D.prototype)
console.log(CObject3D)

var old_prototype = CObject3D.prototype;
var old_init = CObject3D;

function CObj3DTest(props){
  old_init.apply(this, arguments);
  // Do something extra
  console.log(this)
}
CObj3DTest.prototype = old_prototype;
console.log(CObj3DTest)

export default CObj3DTest;