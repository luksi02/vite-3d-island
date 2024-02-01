import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import * as THREE from 'three';

import droneScene from "../assets/3d/drone.glb";

export function Drone() {
  const droneRef = useRef();

  // Load the 3D model and animations from the provided GLTF file
  const { scene, animations } = useGLTF(droneScene);

  // Get access to the animations for the drone
  const { actions } = useAnimations(animations, droneRef);


  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate drone-like motion using a sine wave
    droneRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 5;

    // Check if the drone reached a certain endpoint relative to the camera
    if (droneRef.current.position.x > camera.position.x + 10) {
      // Change direction to backward and rotate the drone 180 degrees on the y-axis
      droneRef.current.rotation.y = Math.PI;
    } else if (droneRef.current.position.x < camera.position.x - 10) {
      // Change direction to forward and reset the drone's rotation
      droneRef.current.rotation.y = 0;
    }

    // Update the X and Z positions based on the direction
    if (droneRef.current.rotation.y === 0) {
      // Moving forward
      droneRef.current.position.x += 0.05;
      droneRef.current.position.z -= 0.05;
    } else {
      // Moving backward
      droneRef.current.position.x -= 0.05;
      droneRef.current.position.z += 0.05;
    }
  });

  return (
    // to create and display 3D objects
    <>
      <mesh ref={droneRef} position={[-5, 2, 1]} scale={[1, 1, 1]} rotation={new THREE.Euler(0, 0, 0)}>
      // use the primitive element when you want to directly embed a complex 3D
        model or scene
        <primitive object={scene} />
      </mesh>
    </>
  );
}
