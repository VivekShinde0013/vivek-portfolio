"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Line, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import ParticleField from "./ParticleField";

function RigGroup({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  useFrame((state) => {
    if (!group.current) return;
    const targetX = (state.pointer.x * viewport.width) / 30;
    const targetY = (state.pointer.y * viewport.height) / 30;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetX, 0.035);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -targetY, 0.035);
  });
  return <group ref={group}>{children}</group>;
}

function TechRing({ radius, color, speed, tiltX = 0, tiltZ = 0 }: { radius: number; color: string; speed: number; tiltX?: number; tiltZ?: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => { if (ref.current) ref.current.rotation.z += delta * speed; });
  return (
    <mesh ref={ref} rotation={[tiltX, 0, tiltZ]}>
      <torusGeometry args={[radius, 0.008, 10, 120]} />
      <meshBasicMaterial color={color} transparent opacity={0.55} />
    </mesh>
  );
}

function Core() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.35;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.6) * 0.15;
  });
  return (
    <group ref={ref}>
      <mesh>
        <icosahedronGeometry args={[0.48, 2]} />
        <meshBasicMaterial color="#62F5C1" wireframe transparent opacity={0.7} />
      </mesh>
      <mesh scale={0.72}>
        <icosahedronGeometry args={[0.48, 2]} />
        <meshBasicMaterial color="#8EA7FF" wireframe transparent opacity={0.55} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.18, 20, 20]} />
        <meshBasicMaterial color="#F5F0E6" />
      </mesh>
    </group>
  );
}

function ModelNode({ position, color, index }: { position: [number, number, number]; color: string; index: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const offset = useRef(index * 0.7);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.1 + offset.current) * 0.13;
    ref.current.rotation.x += 0.004;
    ref.current.rotation.y += 0.006;
  });
  return (
    <Float speed={1.4 + index * 0.08} rotationIntensity={0.6} floatIntensity={0.5}>
      <mesh ref={ref} position={position}>
        <octahedronGeometry args={[0.11, 1]} />
        <meshBasicMaterial color={color} wireframe />
      </mesh>
    </Float>
  );
}

function DataBeam({ color, radius, speed }: { color: string; radius: number; speed: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed;
    ref.current.position.set(Math.cos(t) * radius, Math.sin(t * 1.7) * 0.6, Math.sin(t) * radius * 0.35);
    ref.current.rotation.z = t;
  });
  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.12, 0.015, 0.015]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

function ConnectionLines() {
  const positions: [number, number, number][] = [
    [-1.6, 0.6, 0.3], [1.7, 0.9, -0.2], [-1.4, -0.8, 0.5], [1.5, -0.7, 0.1], [0, 1.3, -0.6], [0.2, -1.4, 0.4],
  ];
  return <>{positions.map((p, i) => <Line key={i} points={[p, [0, 0, 0]]} color={i % 2 ? "#8EA7FF" : "#62F5C1"} transparent opacity={0.35} lineWidth={0.8} />)}</>;
}

function RotatingPanel({ position, color }: { position: [number, number, number]; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => { if (ref.current) ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.7) * 0.15; });
  return (
    <mesh ref={ref} position={position} rotation={[0.15, 0.1, 0]}>
      <planeGeometry args={[0.62, 0.38]} />
      <meshBasicMaterial color={color} transparent opacity={0.07} side={THREE.DoubleSide} />
    </mesh>
  );
}

export default function HeroScene() {
  const nodePositions: [number, number, number][] = [
    [-1.6, 0.6, 0.3], [1.7, 0.9, -0.2], [-1.4, -0.8, 0.5], [1.5, -0.7, 0.1], [0, 1.3, -0.6], [0.2, -1.4, 0.4],
  ];
  const colors = ["#62F5C1", "#8EA7FF", "#FF7A90", "#62F5C1", "#8EA7FF", "#FF7A90"];
  const beams = useMemo(() => Array.from({ length: 9 }, (_, i) => ({ color: colors[i % colors.length], radius: 0.9 + (i % 4) * 0.22, speed: 0.22 + i * 0.025 })), []);

  return (
    <Canvas camera={{ position: [0, 0, 4.2], fov: 45 }} dpr={[1, 1.6]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 0, 2]} intensity={7} color="#62F5C1" />
      <pointLight position={[-2, 1, 1]} intensity={4} color="#8EA7FF" />
      <RigGroup>
        <Core />
        <TechRing radius={1.45} color="#62F5C1" speed={0.18} tiltX={0.35} />
        <TechRing radius={1.75} color="#8EA7FF" speed={-0.12} tiltX={-0.45} tiltZ={0.35} />
        <TechRing radius={2.05} color="#FF7A90" speed={0.07} tiltX={1.05} tiltZ={-0.2} />
        <ConnectionLines />
        {nodePositions.map((pos, i) => <ModelNode key={i} position={pos} color={colors[i]} index={i} />)}
        {beams.map((b, i) => <DataBeam key={i} {...b} />)}
        <RotatingPanel position={[-1.6, 1.1, -0.5]} color="#62F5C1" />
        <RotatingPanel position={[1.55, -1.05, -0.5]} color="#8EA7FF" />
        <ParticleField count={260} radius={2.8} color="#62F5C1" size={0.014} speed={0.018} />
        <Sparkles count={90} scale={[4.8, 4.8, 3]} size={1.4} speed={0.22} color="#8EA7FF" />
      </RigGroup>
    </Canvas>
  );
}
