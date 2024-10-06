import { useGLTF } from "@react-three/drei"; // Ensure this is imported
import { Mesh, Vector3 } from "three";

const Satellite = ({position}:{position:Vector3 | [x: number, y: number, z: number]}) => {
    const { nodes } = useGLTF("/images/satelite/satellites1.glb"); // Load the GLB model
    console.log(nodes.Course_Satellites_Model);
  
    return (
      <>
        <ambientLight intensity={0.2} color={0xffffff} />
            <directionalLight
                castShadow
                intensity={1.0}
                position={[5, 0, 0]}
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            />
            <pointLight
                position={[0, 0, 0]} 
                intensity={1.5} 
                decay={2} 
                distance={50}
            />
        {nodes.Course_Satellites_Model.children.map((child, index) => {
            if(child instanceof Mesh)
            {
              return (
                <mesh
                key={index}
                geometry={child?.geometry}
                material={child?.material}
                position={position}
                scale={0.01}
                />
                );
            }
        })}
      </>
    );
  };

export default Satellite