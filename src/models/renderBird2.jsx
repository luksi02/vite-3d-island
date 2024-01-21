import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import birdScene2 from "../assets/3d/bird.glb";

// Function for the second bird
export function renderBird2() {
    const birdRef2 = useRef();

    // Load the 3D model and animations for the bird
    const { scene2, animations2 } = useGLTF(birdScene2);

    // Get access to the animations for the bird
    const { actions2 } = useAnimations(animations2, birdRef2);

    // Play the "Take 001" animation when the component mounts
    useEffect(() => {
        actions2["Take 001"].play();
    }, []);

    useFrame(({ clock, camera }) => {
        // Update the Y position to simulate bird-like motion using a sine wave
        birdRef2.current.position.y = Math.sin(clock.elapsedTime) * 0.3 + 3;

        // Check if the bird reached a certain endpoint relative to the camera
        if (birdRef2.current.position.x > camera.position.x + 10) {
            // Change direction to backward and rotate the bird 180 degrees on the y-axis
            birdRef2.current.rotation.y = Math.PI;
        } else if (birdRef2.current.position.x < camera.position.x - 10) {
            // Change direction to forward and reset the bird's rotation
            birdRef2.current.rotation.y = 0;
        }

        // Update the X and Z positions based on the direction
        if (birdRef2.current.rotation.y === 0) {
            // Moving forward
            birdRef2.current.position.x += 0.01;
            birdRef2.current.position.z -= 0.01;
        } else {
            // Moving backward
            birdRef2.current.position.x -= 0.01;
            birdRef2.current.position.z += 0.01;
        }
    });

    return (
        // to create and display 3D objects
        <mesh ref={birdRef2} position={[2, 2, 7]} scale={[0.003, 0.003, 0.003]}>
      // use the primitive element when you want to directly embed a complex 3D
            // model or scene
            <primitive object={scene2} />
        </mesh>
    );
}
