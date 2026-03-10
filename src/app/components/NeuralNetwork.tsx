"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Sphere } from "@react-three/drei";

type NodeProps = {
  position: [number, number, number];
};

function Node({ position }: NodeProps) {
  return (
    <Float speed={2} rotationIntensity={1}>
      <Sphere args={[0.08, 32, 32]} position={position}>
        <meshStandardMaterial color="cyan" />
      </Sphere>
    </Float>
  );
}

export default function NeuralNetwork() {

  const nodes: [number, number, number][] = [
    [0, 0, 0],
    [2, 1, -1],
    [-2, -1, 1],
    [1, -2, 2],
    [-1, 2, -2],
    [3, 0, -3],
    [-3, 1, 2]
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">

      <Canvas camera={{ position: [0, 0, 5] }}>

        <ambientLight intensity={0.5} />

        <pointLight position={[10, 10, 10]} />

        {nodes.map((pos, i) => (
          <Node key={i} position={pos} />
        ))}

      </Canvas>

    </div>
  );
}