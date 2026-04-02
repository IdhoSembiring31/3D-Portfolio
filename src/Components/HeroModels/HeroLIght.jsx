import * as THREE from 'three';
function HeroLIght() {
  return (
    <>
    <spotLight
    position={[2,10,6]}
    angle={0.09}
    penumbra={0.2}
    intensity={100}
    color="white"
    decay={1}
    />

    <spotLight
    position={[4,5,4]}
    angle={0.3}
    penumbra={0.5}
    intensity={40}
    color="#4cc9f0"
    decay={2}
    />

    <spotLight
    position={[-3,5,5]}
    angle={0.4}
    penumbra={1}
    intensity={60}
    color="#9d4edd"
    decay={1.5}
    />

     <pointLight
        position={[0,1,0]}
        intensity={10}
        color="#7209b7"
    />

    <pointLight
        position={[1,2,-2]}
        intensity={10}
        color="#0d00a4"
    />
    </>
   
  )
}

export default HeroLIght