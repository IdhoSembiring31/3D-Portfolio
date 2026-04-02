//This is the exactly what we'll do
// load a .glb model(GLTF format)
//Adds basic lighting
//Applies environment reflections for realism
// wraps the model in a floating animation
// optionally tweaks the material (like setting a white color on a specific mesh)
// disables zoom using OrbitControls 8.45.38
  import { Float, useGLTF,Environment, OrbitControls } from "@react-three/drei"
  import { Canvas } from "@react-three/fiber";
  import { useEffect } from "react";
  import * as THREE from 'three';

  function TechIcon({model}){
      const scene = useGLTF(model.modelPath);

      useEffect(()=>{
        if(model.name === 'Interactive Developer'){
          scene.scene.traverse((child)=>{
            if(child.isMesh && child.name === 'Object5'){
              child.material = new THREE.MeshStandardMaterial({color: 'white'})
            }
          })
        }
      },[])
    return (
      <>
      <Canvas>
        <ambientLight intensity={0.3}/>
        <directionalLight position={[5,5,5]} intensity={1}/>
       
         <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
      />
        <Environment preset="city"/>

          <Float speed={5} floatIntensity={0.9} rotationIntensity={0.5}>
            <group scale={model.scale} rotation={model.rotation}>
              <primitive object={scene.scene} dispose={null}/>  
            </group>
          </Float>
           <OrbitControls enableZoom={false} />
      </Canvas>
      </>
    )
  }

export default TechIcon