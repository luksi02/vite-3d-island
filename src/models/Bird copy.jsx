import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import * as THREE from 'three';

// import birdScene from "../assets/3d/bird.glb";
import birdScene from "../assets/3d/aeon_dart_iv.glb";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export function Bird() {
  const birdRef = useRef();

  // Load the 3D model and animations from the provided GLTF file
  const { scene, animations } = useGLTF(birdScene);

  // Get access to the animations for the bird
  const { actions } = useAnimations(animations, birdRef);

  // // Play the "Take 001" animation when the component mounts
  // // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  // useEffect(() => {
  //   actions["Take 001"].play();
  // }, []);

  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate bird-like motion using a sine wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Check if the bird reached a certain endpoint relative to the camera
    if (birdRef.current.position.x > camera.position.x + 10) {
      // Change direction to backward and rotate the bird 180 degrees on the y-axis
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      // Change direction to forward and reset the bird's rotation
      birdRef.current.rotation.y = 0;
    }

    // Update the X and Z positions based on the direction
    if (birdRef.current.rotation.y === 0) {
      // Moving forward
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      // Moving backward
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });

  return (
    // to create and display 3D objects
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.2, 0.2, 0.2]} rotation={new THREE.Euler(0, 3*Math.PI/8, 0)}>
      // use the primitive element when you want to directly embed a complex 3D
      model or scene
      <primitive object={scene} />
    </mesh>

    // <>
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     // geometry={nodes.Object_4.geometry}
    //     // material={materials.Space_Jet_Atlas}
    //     position={[2.351, 1.59, 0.005]}
    //     rotation={[1.656, 1.473, -1.646]}
    //     scale={0.585}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //   // geometry={nodes.Object_6.geometry}
    //   // material={materials.Material}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //   // geometry={nodes.Object_7.geometry}
    //   // material={materials.Inner_Grille}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //   // geometry={nodes.Object_9.geometry}
    //   // material={materials.Canopy}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //   // geometry={nodes.Object_11.geometry}
    //   // material={materials.Boosters}
    //   />
    // </>
  );
}
