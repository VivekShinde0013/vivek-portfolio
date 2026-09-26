"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Html } from "@react-three/drei";
import * as THREE from "three";
import { pipelineStages } from "@/lib/data/pipeline";

const nodePositions: [number, number, number][] = [
  [-4.2, 0.6, 0],
  [-2.9, -0.4, 0.3],
  [-1.5, 0.5, -0.2],
  [0, -0.5, 0.2],
  [1.5, 0.5, -0.2],
  [2.9, -0.4, 0.3],
  [4.2, 0.6, 0],
];

function Node({
  position,
  label,
  active,
  index,
}: {
  position: [number, number, number];
  label: string;
  active: boolean;
  index: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const target = active ? 1.5 : 1;
    ref.current.scale.setScalar(THREE.MathUtils.lerp(ref.current.scale.x, target, 0.08));
    ref.current.rotation.y = state.clock.elapsedTime * 0.4 + index;
  });
  const color = active ? "#62F5C1" : "#3A4a5E";
  return (
    <group position={position}>
      <mesh ref={ref}>
        <octahedronGeometry args={[0.22, 0]} />
        <meshBasicMaterial color={color} wireframe={!active} transparent opacity={active ? 0.95 : 0.5} />
      </mesh>
      <Html center distanceFactor={8} position={[0, -0.45, 0]} style={{ pointerEvents: "none" }}>
        <div
          className={`whitespace-nowrap font-mono text-[10px] tracking-wide transition-colors duration-300 ${
            active ? "text-cyan" : "text-inkdim"
          }`}
        >
          {label}
        </div>
      </Html>
    </group>
  );
}

/**
 * Animates its own position between two points every frame by mutating the
 * mesh directly (via ref), rather than lifting a "progress" value into React
 * state — that would re-render (and rebuild) the whole pipeline 60x/sec.
 */
function FlowParticle({ from, to }: { from: THREE.Vector3; to: THREE.Vector3 }) {
  const ref = useRef<THREE.Mesh>(null);
  const clockRef = useRef(0);

  useFrame((_, delta) => {
    if (!ref.current) return;
    clockRef.current += delta;
    const t = (clockRef.current * 0.6) % 1;
    ref.current.position.lerpVectors(from, to, t);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.045, 8, 8]} />
      <meshBasicMaterial color="#62F5C1" />
    </mesh>
  );
}

export default function PipelineScene({ activeStep }: { activeStep: number }) {
  const vectors = useMemo(() => nodePositions.map((p) => new THREE.Vector3(...p)), []);
  const segmentIndex = Math.max(0, Math.min(activeStep - 1, vectors.length - 2));

  return (
    <>
      {vectors.slice(0, -1).map((v, i) => (
        <Line
          key={i}
          points={[v, vectors[i + 1]]}
          color={i < activeStep ? "#62F5C1" : "#2A3040"}
          lineWidth={1.2}
          transparent
          opacity={i < activeStep ? 0.7 : 0.4}
        />
      ))}
      {nodePositions.map((pos, i) => (
        <Node key={i} position={pos} label={pipelineStages[i]} active={i <= activeStep} index={i} />
      ))}
      {activeStep > 0 && activeStep < vectors.length && (
        <FlowParticle key={segmentIndex} from={vectors[segmentIndex]} to={vectors[segmentIndex + 1]} />
      )}
    </>
  );
}

export function PipelineCanvas({ activeStep }: { activeStep: number }) {
  return (
    <Canvas camera={{ position: [0, 0, 6.2], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
      <PipelineScene activeStep={activeStep} />
    </Canvas>
  );
}
