/**
 * IMPORTANT: Loading glTF models into a Three.js scene is a lot of work.
 * Before we can configure or animate our model’s meshes, we need to iterate through
 * each part of our model’s meshes and save them separately.
 *
 * But luckily there is an app that turns gltf or glb files into jsx components
 * For this model, visit https://gltf.pmnd.rs/
 * And get the code. And then add the rest of the things.
 * YOU DON'T HAVE TO WRITE EVERYTHING FROM SCRATCH
 */

import React, { useRef, useEffect, useFrame } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import scene from "../assets/3d/sci-fi_toad.glb";

const toadRotation = 0.5; // Rotation in radians (30 degrees)

// 3D Model from: https://sketchfab.com/3d-models/toad-f372c04de44640fbb6a4f9e4e5845c78
export function Toad({ currentAnimation, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  // This effect will run whenever the currentAnimation prop changes
  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop());

    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  //  // Use Frame to apply rotation
  //  useFrame(() => {
  //   const mesh = body.object.mesh;
  //   mesh.position.y = mesh.position.y * Math.cos(toadRotation);
  //   mesh.position.x = mesh.position.x * Math.sin(toadRotation);
  // });

  return (
    <group ref={group} {...props} dispose={null} >        

        <mesh
        castShadow
        receiveShadow
        geometry={nodes.Leg_A_low_Body_0.geometry}
        material={materials.Body}
        position={[0, 124.673, -9.425]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Leg_C_low_Body_0.geometry}
        material={materials.Body}
        position={[0, 69.988, -18.919]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Leg_D1_low_Body_0.geometry}
        material={materials.Body}
        position={[0, 15.444, -7.467]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Leg_D_low_Body_0.geometry}
        material={materials.Body}
        position={[0, 15.444, -7.467]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hand_A_low_Body_0.geometry}
        material={materials.Body}
        position={[0, 107.787, 10.478]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hand_B_low_Body_0.geometry}
        material={materials.Body}
        position={[0, 107.787, 10.478]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hand_C_low_Body_0.geometry}
        material={materials.Body}
        position={[0, 107.787, 10.478]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hand_D_low_Body_0.geometry}
        material={materials.Body}
        position={[0, 91.384, 2.003]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hand_E1_low_Body_0.geometry}
        material={materials.Body}
        position={[0, 75.953, 12.043]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hand_E2_low_Body_0.geometry}
        material={materials.Body}
        position={[0, 75.953, 12.043]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hand_E3_low_Body_0.geometry}
        material={materials.Body}
        position={[0, 75.953, 12.043]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hand_E4_low_Body_0.geometry}
        material={materials.Body}
        position={[0, 75.953, 12.043]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hand_E5_low_Body_0.geometry}
        material={materials.Body}
        position={[0, 75.953, 12.043]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hand_E_low_Body_0.geometry}
        material={materials.Body}
        position={[0, 75.953, 12.043]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Body_A_low_Body_0.geometry}
        material={materials.Body}
        position={[0, 130.813, -8.218]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Glass_low001_Glass_0.geometry}
        material={materials.Glass}
        position={[0.015, 124.903, -33.582]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GlassHead_low_Glass_0.geometry}
        material={materials.Glass}
        position={[0, 140.175, 9.317]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Eyes_low_Head_0.geometry}
        material={materials.Head}
        position={[0, 152.488, 13.882]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head_low_Head_0.geometry}
        material={materials.Head}
        position={[0, 141.064, 15.311]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hand_E6_low_Body_0.geometry}
        material={materials.Body}
        position={[0, 75.953, 12.043]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />         
      
    </group>
  );
}

useGLTF.preload(scene);
