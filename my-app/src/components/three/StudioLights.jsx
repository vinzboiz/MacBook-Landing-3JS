import { Environment, Lightformer } from '@react-three/drei';
import { SpotLight } from 'three';
import { useThree } from '@react-three/fiber';

const StudioLights = () => {
  return (
    <group name="lights"> 
    <Environment resolution={256}> 
        <group>
            <Lightformer 
            form="rect"
    
            intensity={10}
            scale={10}
            position={[-10, 5, -5]}
            rotation-y={ Math.PI / 2}
            />
            <Lightformer 
            form="rect"
    
            intensity={10}
            scale={10}
            position={[10, 0, 1]}
            rotation-y={ Math.PI / 2}
            />
        </group>
        </Environment>  
        <spotLight
        intensity={Math.PI * 0.2}
        decay={0}
        angle={0.15}
        position={[-2,10,5]}
        />
          <spotLight
        intensity={Math.PI * 0.2}
        decay={0}
        angle={0.15}
        position={[0,-25,10]}
        />

<spotLight
        intensity={Math.PI * 0.5}
        decay={0}
        angle={0.15}
        position={[0,15,5]}
        />


     </group>

  )
}

export default StudioLights;