

# convexPolyhedron to BufferGeometry:
  For wireframe debug build.
```js
const cpoly = boxBody.shapes[0].convexPolyhedronRepresentation;
const geometry = new THREE.BufferGeometry();
let verts = [];
for(let i =0;i <cpoly.faces.length;i++){
  console.log(cpoly.faces[i])
  const f = cpoly.faces[i];
  console.log(f)
  //vects= [...vects, cpoly.vertices[i].x*2,cpoly.vertices[i].y*2,cpoly.vertices[i].x*2]
  const v = cpoly.vertices;
  //console.log(v)
  if(cpoly.faces[i].length==4){ // quad poly
    //verts.push()
    verts = [...verts, v[f[0]].x*1.2,v[f[0]].y*1.2,v[f[0]].z*1.2]
    verts = [...verts, v[f[1]].x*1.2,v[f[1]].y*1.2,v[f[1]].z*1.2]
    verts = [...verts, v[f[2]].x*1.2,v[f[2]].y*1.2,v[f[2]].z*1.2]

    verts = [...verts, v[f[0]].x*1.2,v[f[0]].y*1.2,v[f[0]].z*1.2]
    verts = [...verts, v[f[3]].x*1.2,v[f[3]].y*1.2,v[f[3]].z*1.2]
    verts = [...verts, v[f[2]].x*1.2,v[f[2]].y*1.2,v[f[2]].z*1.2]
    //break;
  }else{
    verts = [...verts, v[f[0]].x*1.2,v[f[0]].y*1.2,v[f[0]].z*1.2]
    verts = [...verts, v[f[1]].x*1.2,v[f[1]].y*1.2,v[f[1]].z*1.2]
    verts = [...verts, v[f[2]].x*1.2,v[f[2]].y*1.2,v[f[2]].z*1.2]
  }
}
console.log(verts)
const vertices = new Float32Array(verts);
geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
const wireframe = new THREE.WireframeGeometry( geometry );
let debugMesh = new THREE.LineSegments( wireframe );
debugMesh.material.depthTest = false;
debugMesh.material.opacity = 0.25;
debugMesh.material.transparent = true;
//addSceneObj(debugMesh)
```