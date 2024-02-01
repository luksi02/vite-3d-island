import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useGLTF, useAnimations } from '@react-three/drei';

// import mechDroneScene from "../assets/3d/mechDrone.glb";
import mechDroneScene from "../assets/3d/mech_drone.glb";

// 3D Model from: https://sketchfab.com/3d-models/stylized-ww1-mechDrone-c4edeb0e410f46e8a4db320879f0a1db
export function Mech_drone({ isRotating, ...props }) {
  const ref = useRef();

  // Load the 3D model and its animations
  const { scene, animations } = useGLTF(mechDroneScene);
  // Get animation actions associated with the mechDrone
  const { actions } = useAnimations(animations, ref);

  // Use an effect to control the mechDrone's animation based on 'isRotating'
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);

  // Rotate the entire scene 90 degrees around the X-axis
  return (
    <mesh {...props} ref={ref} scale={[5, 5, 5]} rotation={new THREE.Euler(0, -1*Math.PI/4, 0)}>
      <primitive object={scene} />
    </mesh>
  );
}