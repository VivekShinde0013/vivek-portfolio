"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

const ROWS = 8;
const COLS = 10;

function CropField() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    let i = 0;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const x = (c - COLS / 2) * 0.42 + 0.21;
        const z = (r - ROWS / 2) * 0.42;
        const sway = Math.sin(t * 1.2 + r * 0.5 + c * 0.3) * 0.05;
        dummy.position.set(x, -0.55, z);
        dummy.rotation.set(0, sway, sway * 0.5);
        dummy.updateMatrix();
        meshRef.current.setMatrixAt(i++, dummy.matrix);
      }
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, ROWS * COLS]}>
      <coneGeometry args={[0.09, 0.32, 6]} />
      <meshBasicMaterial color="#62F5C1" transparent opacity={0.8} />
    </instancedMesh>
  );
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.72, 0]}>
      <planeGeometry args={[6, 4]} />
      <meshBasicMaterial color="#10131C" transparent opacity={0.9} />
    </mesh>
  );
}

function GroundGrid() {
  const geometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = -3; i <= 3; i++) {
      points.push(new THREE.Vector3(i, -0.71, -2), new THREE.Vector3(i, -0.71, 2));
    }
    for (let i = -2; i <= 2; i++) {
      points.push(new THREE.Vector3(-3, -0.71, i), new THREE.Vector3(3, -0.71, i));
    }
    return new THREE.BufferGeometry().setFromPoints(points);
  }, []);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color="#2A3040" transparent opacity={0.6} />
    </lineSegments>
  );
}

function MobileScanner({ stage }: { stage: number }) {
  const group = useRef<THREE.Group>(null);
  const scanRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.position.y = 0.25 + Math.sin(t * 1.15) * 0.08;
    group.current.rotation.z = Math.sin(t * 0.65) * 0.045;
    group.current.rotation.y = Math.sin(t * 0.42) * 0.12;

    if (scanRef.current) {
      scanRef.current.position.y = -0.55 + ((t * 0.65) % 1.05);
      const mat = scanRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = stage >= 1 ? 0.65 : 0.3;
    }
  });

  const active = stage >= 1 ? "#62F5C1" : "#8EA7FF";

  return (
    <group ref={group} position={[0, 0.25, 0.3]}>
      <mesh>
        <boxGeometry args={[1.15, 2.05, 0.12]} />
        <meshBasicMaterial color="#151B22" />
      </mesh>
      <mesh position={[0, 0, 0.07]}>
        <boxGeometry args={[0.98, 1.78, 0.025]} />
        <meshBasicMaterial color="#0B1114" />
      </mesh>
      <mesh position={[0, -0.03, 0.09]}>
        <planeGeometry args={[0.88, 1.35]} />
        <meshBasicMaterial color="#17382E" transparent opacity={0.85} />
      </mesh>
      <mesh position={[0, 0.83, 0.09]}>
        <boxGeometry args={[0.26, 0.045, 0.02]} />
        <meshBasicMaterial color="#08090F" />
      </mesh>
      <mesh position={[-0.07, 0.77, 0.105]}>
        <circleGeometry args={[0.035, 20]} />
        <meshBasicMaterial color="#62F5C1" />
      </mesh>
      <mesh position={[0.07, 0.77, 0.105]}>
        <circleGeometry args={[0.035, 20]} />
        <meshBasicMaterial color="#8EA7FF" />
      </mesh>
      <lineSegments position={[0, -0.03, 0.12]}>
        <edgesGeometry args={[new THREE.BoxGeometry(0.82, 1.22, 0.01)]} />
        <lineBasicMaterial color={active} transparent opacity={0.8} />
      </lineSegments>
      <mesh ref={scanRef} position={[0, -0.55, 0.14]}>
        <planeGeometry args={[0.82, 0.018]} />
        <meshBasicMaterial color={active} transparent opacity={0.45} />
      </mesh>
      <mesh position={[0, -0.83, 0.1]}>
        <circleGeometry args={[0.11, 24]} />
        <meshBasicMaterial color={active} />
      </mesh>
      <Text position={[0, -1.28, 0]} fontSize={0.12} color={active} anchorX="center">
        MOBILE CAPTURE
      </Text>
    </group>
  );
}

function ImageSignal({ stage }: { stage: number }) {
  const ref = useRef<THREE.Group>(null);
  const color = stage >= 1 ? "#62F5C1" : "#8EA7FF";

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.z = Math.sin(t * 0.6) * 0.05;
    ref.current.position.x = 0.95 + Math.sin(t * 0.8) * 0.06;
  });

  return (
    <group ref={ref} position={[0.95, 0.35, -0.1]}>
      <mesh>
        <planeGeometry args={[0.72, 0.5]} />
        <meshBasicMaterial color={color} transparent opacity={0.08} side={THREE.DoubleSide} />
      </mesh>
      <lineSegments>
        <edgesGeometry args={[new THREE.PlaneGeometry(0.72, 0.5)]} />
        <lineBasicMaterial color={color} transparent opacity={0.65} />
      </lineSegments>
      <Text position={[0, 0, 0.02]} fontSize={0.09} color={color} anchorX="center">
        IMAGE
      </Text>
    </group>
  );
}

function SignalLine({ stage }: { stage: number }) {
  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setFromPoints([
      new THREE.Vector3(0.6, 0.25, 0),
      new THREE.Vector3(1.55, 0.25, 0),
      new THREE.Vector3(1.9, 0.65, 0),
    ]);
    return g;
  }, []);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color={stage >= 1 ? "#62F5C1" : "#8EA7FF"} transparent opacity={0.45} />
    </lineSegments>
  );
}

function RiskRing({ stage }: { stage: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 3) * 0.08);
  });
  if (stage < 1) return null;

  return (
    <mesh ref={ref} position={[1.65, -0.35, 0.25]} rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[0.22, 0.28, 32]} />
      <meshBasicMaterial color={stage >= 2 ? "#F6C453" : "#62F5C1"} transparent opacity={0.8} side={THREE.DoubleSide} />
    </mesh>
  );
}

export default function FieldScene({ stage }: { stage: number }) {
  return (
    <Canvas camera={{ position: [3.0, 1.45, 4.0], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
      <Ground />
      <GroundGrid />
      <CropField />
      <MobileScanner stage={stage} />
      <ImageSignal stage={stage} />
      <SignalLine stage={stage} />
      <RiskRing stage={stage} />
    </Canvas>
  );
}
