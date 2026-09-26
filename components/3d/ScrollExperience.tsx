"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Sparkles, Text } from "@react-three/drei";
import { useMemo, useRef, type MutableRefObject } from "react";
import * as THREE from "three";

function WorkshopCore({ progressRef }: { progressRef: MutableRefObject<number> }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const progress = progressRef.current;
    ref.current.rotation.y = t * 0.28 + progress * Math.PI * 3;
    ref.current.rotation.x = Math.sin(t * 0.45) * 0.12 + progress * 0.8;
    ref.current.position.y = Math.sin(t * 0.8) * 0.12 + (progress - 0.5) * 0.8;
    ref.current.scale.setScalar(0.72 + Math.sin(progress * Math.PI) * 0.18);
  });

  return (
    <group ref={ref}>
      <mesh>
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial color="#62F5C1" wireframe transparent opacity={0.45} />
      </mesh>
      <mesh scale={0.67}>
        <octahedronGeometry args={[1, 2]} />
        <meshBasicMaterial color="#FF7A90" wireframe transparent opacity={0.38} />
      </mesh>
      <mesh scale={0.38}>
        <sphereGeometry args={[1, 24, 24]} />
        <meshBasicMaterial color="#F5F0E6" />
      </mesh>
    </group>
  );
}

function OrbitingModule({ index, progressRef }: { index: number; progressRef: MutableRefObject<number> }) {
  const ref = useRef<THREE.Group>(null);
  const colors = ["#62F5C1", "#8EA7FF", "#FF7A90", "#F5F0E6"];
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const progress = progressRef.current;
    const angle = t * (0.22 + index * 0.025) + index * Math.PI / 2 + progress * Math.PI * 4;
    const radius = 1.8 + (index % 2) * 0.55 + Math.sin(progress * Math.PI) * 0.5;
    ref.current.position.set(
      Math.cos(angle) * radius,
      Math.sin(angle * 1.3) * (0.7 + progress * 0.8),
      Math.sin(angle) * radius * 0.42
    );
    ref.current.rotation.x = t * 0.6;
    ref.current.rotation.z = -t * 0.4;
  });

  return (
    <group ref={ref}>
      <mesh>
        <boxGeometry args={[0.18, 0.18, 0.18]} />
        <meshBasicMaterial color={colors[index]} wireframe />
      </mesh>
      <Text position={[0, 0.24, 0]} fontSize={0.11} color={colors[index]} anchorX="center">
        {["DATA", "MODEL", "RAG", "PRODUCT"][index]}
      </Text>
    </group>
  );
}


function PortalTunnel({ progressRef }: { progressRef: MutableRefObject<number> }) {
  const rings = useMemo(() => Array.from({ length: 11 }, (_, i) => i), []);
  return (
    <group>
      {rings.map((i) => (
        <TunnelRing key={i} index={i} progressRef={progressRef} />
      ))}
    </group>
  );
}

function TunnelRing({ index, progressRef }: { index: number; progressRef: MutableRefObject<number> }) {
  const ref = useRef<THREE.Mesh>(null);
  const colors = ["#62F5C1", "#8EA7FF", "#FF7A90"];
  useFrame((state) => {
    if (!ref.current) return;
    const p = progressRef.current;
    const t = state.clock.elapsedTime;
    const zBase = -4.5 + index * 0.82;
    const travel = (p * 9.5 + index * 0.18) % 9.5;
    ref.current.position.z = zBase + travel;
    ref.current.rotation.x = 0.7 + Math.sin(t * 0.25 + index) * 0.12 + p * 1.2;
    ref.current.rotation.y = Math.sin(t * 0.2 + index) * 0.2;
    const pulse = 0.72 + Math.sin(t * 1.5 + index * 0.8) * 0.08;
    ref.current.scale.setScalar(pulse + Math.sin(p * Math.PI) * 0.2);
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[1.55 + (index % 3) * 0.18, 0.012, 8, 64]} />
      <meshBasicMaterial
        color={colors[index % colors.length]}
        transparent
        opacity={0.16 + (index % 3) * 0.035}
      />
    </mesh>
  );
}

function ScrollScene({ progressRef }: { progressRef: MutableRefObject<number> }) {
  const points = useMemo(() => {
    const p: [number, number, number][] = [];
    for (let i = 0; i < 70; i++) {
      const a = (i / 70) * Math.PI * 2;
      p.push([Math.cos(a) * 2.1, Math.sin(a) * 1.1, Math.sin(a * 3) * 0.7]);
    }
    return p;
  }, []);

  return (
    <>
      <PortalTunnel progressRef={progressRef} />
      <WorkshopCore progressRef={progressRef} />
      {Array.from({ length: 4 }, (_, i) => <OrbitingModule key={i} index={i} progressRef={progressRef} />)}
      <Line points={points} color="#62F5C1" transparent opacity={0.12} lineWidth={1} />
      <Sparkles count={120} scale={[7, 5, 5]} size={1.1} speed={0.18} color="#8EA7FF" />
    </>
  );
}

export default function ScrollExperience({ progressRef }: { progressRef: MutableRefObject<number> }) {
  const targetRef = useRef(0);

  useFrame(({ camera, pointer }) => {
    if (typeof window === "undefined") return;
    const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    targetRef.current = window.scrollY / max;
    progressRef.current = THREE.MathUtils.lerp(progressRef.current, targetRef.current, 0.055);

    const p = progressRef.current;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.45, 0.035);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.28, 0.035);
    camera.position.z = 7.2 - Math.sin(p * Math.PI) * 1.8;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export function ScrollExperienceLayer() {
  const progressRef = useRef(0);
  return (
    <div className="scroll-3d-layer" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 7.2], fov: 48 }} dpr={[0.7, 1.35]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 2, 4]} intensity={7} color="#62F5C1" />
        <pointLight position={[-3, -1, 2]} intensity={4} color="#8EA7FF" />
        <pointLight position={[3, 1, 1]} intensity={4} color="#FF7A90" />
        <ScrollScene progressRef={progressRef} />
        <ScrollExperience progressRef={progressRef} />
      </Canvas>
    </div>
  );
}
