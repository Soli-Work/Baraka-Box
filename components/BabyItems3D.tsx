"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Baby Bottle
function BabyBottle({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const initialY = position[1];
  const offset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime + offset) * 0.15;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3 + offset;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5 + offset) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Bottle body */}
      <mesh position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.25, 0.7, 16]} />
        <meshStandardMaterial color="#FFD166" transparent opacity={0.85} roughness={0.1} />
      </mesh>
      {/* Bottle neck */}
      <mesh position={[0, 0.45, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.18, 0.2, 16]} />
        <meshStandardMaterial color="#FFD166" transparent opacity={0.85} roughness={0.1} />
      </mesh>
      {/* Nipple */}
      <mesh position={[0, 0.65, 0]} castShadow>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#FF8A84" roughness={0.6} />
      </mesh>
      {/* Cap ring */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <torusGeometry args={[0.14, 0.03, 8, 20]} />
        <meshStandardMaterial color="#F4645C" roughness={0.3} metalness={0.2} />
      </mesh>
      {/* Measurement lines */}
      {[0.1, 0, -0.1, -0.2].map((y, i) => (
        <mesh key={i} position={[0.22, y, 0]}>
          <boxGeometry args={[0.02, 0.01, 0.08]} />
          <meshStandardMaterial color="#A8E6CF" />
        </mesh>
      ))}
    </group>
  );
}

// Teddy Bear
function TeddyBear({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const initialY = position[1];
  const offset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * 0.8 + offset) * 0.2;
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4 + offset) * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Body */}
      <mesh position={[0, 0, 0]} castShadow>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshStandardMaterial color="#FFB997" roughness={0.8} />
      </mesh>
      {/* Head */}
      <mesh position={[0, 0.55, 0]} castShadow>
        <sphereGeometry args={[0.32, 16, 16]} />
        <meshStandardMaterial color="#FFB997" roughness={0.8} />
      </mesh>
      {/* Ears */}
      <mesh position={[-0.25, 0.8, 0]} castShadow>
        <sphereGeometry args={[0.12, 12, 12]} />
        <meshStandardMaterial color="#FFB997" roughness={0.8} />
      </mesh>
      <mesh position={[0.25, 0.8, 0]} castShadow>
        <sphereGeometry args={[0.12, 12, 12]} />
        <meshStandardMaterial color="#FFB997" roughness={0.8} />
      </mesh>
      {/* Inner ears */}
      <mesh position={[-0.25, 0.8, 0.08]} castShadow>
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshStandardMaterial color="#FF8A84" roughness={0.6} />
      </mesh>
      <mesh position={[0.25, 0.8, 0.08]} castShadow>
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshStandardMaterial color="#FF8A84" roughness={0.6} />
      </mesh>
      {/* Snout */}
      <mesh position={[0, 0.48, 0.25]} castShadow>
        <sphereGeometry args={[0.12, 12, 12]} />
        <meshStandardMaterial color="#F0BC4A" roughness={0.7} />
      </mesh>
      {/* Nose */}
      <mesh position={[0, 0.52, 0.35]} castShadow>
        <sphereGeometry args={[0.05, 12, 12]} />
        <meshStandardMaterial color="#2C1810" roughness={0.5} />
      </mesh>
      {/* Eyes */}
      <mesh position={[-0.1, 0.6, 0.26]} castShadow>
        <sphereGeometry args={[0.04, 12, 12]} />
        <meshStandardMaterial color="#2C1810" roughness={0.3} />
      </mesh>
      <mesh position={[0.1, 0.6, 0.26]} castShadow>
        <sphereGeometry args={[0.04, 12, 12]} />
        <meshStandardMaterial color="#2C1810" roughness={0.3} />
      </mesh>
      {/* Arms */}
      <mesh position={[-0.4, 0.1, 0.1]} rotation={[0, 0, 0.5]} castShadow>
        <capsuleGeometry args={[0.1, 0.2, 8, 16]} />
        <meshStandardMaterial color="#FFB997" roughness={0.8} />
      </mesh>
      <mesh position={[0.4, 0.1, 0.1]} rotation={[0, 0, -0.5]} castShadow>
        <capsuleGeometry args={[0.1, 0.2, 8, 16]} />
        <meshStandardMaterial color="#FFB997" roughness={0.8} />
      </mesh>
      {/* Legs */}
      <mesh position={[-0.2, -0.35, 0.15]} castShadow>
        <capsuleGeometry args={[0.12, 0.15, 8, 16]} />
        <meshStandardMaterial color="#FFB997" roughness={0.8} />
      </mesh>
      <mesh position={[0.2, -0.35, 0.15]} castShadow>
        <capsuleGeometry args={[0.12, 0.15, 8, 16]} />
        <meshStandardMaterial color="#FFB997" roughness={0.8} />
      </mesh>
      {/* Bow */}
      <mesh position={[0, 0.35, 0.32]} castShadow>
        <torusGeometry args={[0.08, 0.025, 8, 12, Math.PI]} />
        <meshStandardMaterial color="#F4645C" roughness={0.4} />
      </mesh>
      <mesh position={[0.08, 0.35, 0.32]} rotation={[0, 0, -0.3]} castShadow>
        <torusGeometry args={[0.06, 0.02, 8, 12, Math.PI]} />
        <meshStandardMaterial color="#F4645C" roughness={0.4} />
      </mesh>
    </group>
  );
}

// Baby Onesie
function BabyOnesie({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const initialY = position[1];
  const offset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * 0.6 + offset) * 0.18;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4 + offset) * 0.15;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Body */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[0.5, 0.6, 0.15]} />
        <meshStandardMaterial color="#A8E6CF" roughness={0.7} />
      </mesh>
      {/* Sleeves */}
      <mesh position={[-0.35, 0.15, 0]} rotation={[0, 0, 0.4]} castShadow>
        <boxGeometry args={[0.25, 0.18, 0.12]} />
        <meshStandardMaterial color="#A8E6CF" roughness={0.7} />
      </mesh>
      <mesh position={[0.35, 0.15, 0]} rotation={[0, 0, -0.4]} castShadow>
        <boxGeometry args={[0.25, 0.18, 0.12]} />
        <meshStandardMaterial color="#A8E6CF" roughness={0.7} />
      </mesh>
      {/* Legs */}
      <mesh position={[-0.12, -0.4, 0]} castShadow>
        <boxGeometry args={[0.18, 0.25, 0.12]} />
        <meshStandardMaterial color="#A8E6CF" roughness={0.7} />
      </mesh>
      <mesh position={[0.12, -0.4, 0]} castShadow>
        <boxGeometry args={[0.18, 0.25, 0.12]} />
        <meshStandardMaterial color="#A8E6CF" roughness={0.7} />
      </mesh>
      {/* Collar */}
      <mesh position={[0, 0.35, 0.05]} castShadow>
        <torusGeometry args={[0.12, 0.03, 8, 20, Math.PI]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.5} />
      </mesh>
      {/* Heart decoration */}
      <mesh position={[0, 0.1, 0.08]} castShadow>
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshStandardMaterial color="#F4645C" roughness={0.5} />
      </mesh>
      {/* Buttons */}
      {[-0.08, -0.2].map((y, i) => (
        <mesh key={i} position={[0, y, 0.08]} castShadow>
          <cylinderGeometry args={[0.025, 0.025, 0.02, 12]} />
          <meshStandardMaterial color="#FFD166" roughness={0.3} metalness={0.3} />
        </mesh>
      ))}
    </group>
  );
}

// Pacifier
function Pacifier({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const initialY = position[1];
  const offset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * 1.2 + offset) * 0.12;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.8 + offset) * 0.2;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Shield */}
      <mesh position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.25, 0.22, 0.08, 20]} />
        <meshStandardMaterial color="#D4AEED" roughness={0.3} />
      </mesh>
      {/* Nipple */}
      <mesh position={[0, 0, 0.15]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#FF8A84" roughness={0.6} />
      </mesh>
      {/* Handle */}
      <mesh position={[0, 0, -0.12]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[0.1, 0.03, 8, 20]} />
        <meshStandardMaterial color="#FFD166" roughness={0.3} metalness={0.4} />
      </mesh>
      {/* Air holes */}
      <mesh position={[-0.1, 0.02, -0.02]} castShadow>
        <cylinderGeometry args={[0.02, 0.02, 0.1, 8]} />
        <meshStandardMaterial color="#FFF8F0" roughness={0.5} />
      </mesh>
      <mesh position={[0.1, 0.02, -0.02]} castShadow>
        <cylinderGeometry args={[0.02, 0.02, 0.1, 8]} />
        <meshStandardMaterial color="#FFF8F0" roughness={0.5} />
      </mesh>
    </group>
  );
}

// Building Blocks
function BuildingBlocks({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const initialY = position[1];
  const offset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * 0.7 + offset) * 0.15;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.25;
    }
  });

  const colors = ["#F4645C", "#FFD166", "#A8E6CF", "#B8DFFE", "#D4AEED"];

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Block stack */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial color={colors[0]} roughness={0.6} />
      </mesh>
      <mesh position={[0.15, 0.3, 0.08]} rotation={[0, 0.3, 0]} castShadow>
        <boxGeometry args={[0.25, 0.25, 0.25]} />
        <meshStandardMaterial color={colors[1]} roughness={0.6} />
      </mesh>
      <mesh position={[-0.12, 0.3, -0.05]} rotation={[0, -0.2, 0]} castShadow>
        <boxGeometry args={[0.22, 0.22, 0.22]} />
        <meshStandardMaterial color={colors[2]} roughness={0.6} />
      </mesh>
      <mesh position={[0.05, 0.55, 0]} rotation={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[0.18, 0.18, 0.18]} />
        <meshStandardMaterial color={colors[3]} roughness={0.6} />
      </mesh>
      {/* Scattered block */}
      <mesh position={[0.35, 0.1, 0.25]} rotation={[0.2, 0.8, 0.1]} castShadow>
        <boxGeometry args={[0.2, 0.2, 0.2]} />
        <meshStandardMaterial color={colors[4]} roughness={0.6} />
      </mesh>
    </group>
  );
}

// Baby Rattle
function BabyRattle({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const initialY = position[1];
  const offset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * 0.9 + offset) * 0.14;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2 + offset) * 0.3;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Handle */}
      <mesh position={[0, -0.25, 0]} castShadow>
        <capsuleGeometry args={[0.06, 0.3, 8, 16]} />
        <meshStandardMaterial color="#FFD166" roughness={0.4} />
      </mesh>
      {/* Ball */}
      <mesh position={[0, 0.1, 0]} castShadow>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial color="#FF8A84" roughness={0.4} />
      </mesh>
      {/* Decorative dots */}
      {[0, Math.PI / 2, Math.PI, Math.PI * 1.5].map((angle, i) => (
        <mesh
          key={i}
          position={[
            Math.sin(angle) * 0.15,
            0.1,
            Math.cos(angle) * 0.15,
          ]}
          castShadow
        >
          <sphereGeometry args={[0.04, 12, 12]} />
          <meshStandardMaterial color={i % 2 === 0 ? "#A8E6CF" : "#B8DFFE"} roughness={0.5} />
        </mesh>
      ))}
    </group>
  );
}

// Baby Bootie
function BabyBootie({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const initialY = position[1];
  const offset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * 0.8 + offset) * 0.16;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3 + offset;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Sole */}
      <mesh position={[0, 0, 0.05]} castShadow>
        <capsuleGeometry args={[0.12, 0.15, 8, 16]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.6} />
      </mesh>
      {/* Upper */}
      <mesh position={[0, 0.12, -0.05]} castShadow>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#F4645C" roughness={0.5} />
      </mesh>
      {/* Pompom */}
      <mesh position={[0, 0.25, -0.08]} castShadow>
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.8} />
      </mesh>
      {/* Cuff */}
      <mesh position={[0, 0.08, -0.05]} rotation={[0.3, 0, 0]} castShadow>
        <torusGeometry args={[0.13, 0.025, 8, 20]} />
        <meshStandardMaterial color="#FFD166" roughness={0.5} />
      </mesh>
    </group>
  );
}

// Gift Box (main centerpiece)
function GiftBox({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Main box body */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.4, 2, 2.4]} />
        <meshStandardMaterial color="#F4645C" roughness={0.35} metalness={0.05} envMapIntensity={1.6} />
      </mesh>
      {/* Lid */}
      <mesh position={[0, 1.22, 0]} castShadow>
        <boxGeometry args={[2.5, 0.45, 2.5]} />
        <meshStandardMaterial color="#D94840" roughness={0.3} metalness={0.05} envMapIntensity={1.6} />
      </mesh>
      {/* Ribbon horizontal */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.52, 0.28, 0.36]} />
        <meshStandardMaterial color="#FFD166" roughness={0.2} metalness={0.1} envMapIntensity={2} />
      </mesh>
      {/* Ribbon vertical */}
      <mesh position={[0, 0.26, 0]}>
        <boxGeometry args={[0.36, 2.52, 0.36]} />
        <meshStandardMaterial color="#FFD166" roughness={0.2} metalness={0.1} envMapIntensity={2} />
      </mesh>
      {/* Ribbon on lid horizontal */}
      <mesh position={[0, 1.22, 0]}>
        <boxGeometry args={[2.55, 0.46, 0.38]} />
        <meshStandardMaterial color="#FFD166" roughness={0.2} metalness={0.1} envMapIntensity={2} />
      </mesh>
      {/* Ribbon on lid vertical */}
      <mesh position={[0, 1.22, 0]}>
        <boxGeometry args={[0.38, 0.46, 2.55]} />
        <meshStandardMaterial color="#FFD166" roughness={0.2} metalness={0.1} envMapIntensity={2} />
      </mesh>
      {/* Bow loops */}
      <mesh position={[-0.22, 1.6, 0]} rotation={[0, 0, Math.PI / 4]}>
        <torusGeometry args={[0.32, 0.09, 8, 20, Math.PI]} />
        <meshStandardMaterial color="#FFD166" roughness={0.2} metalness={0.1} />
      </mesh>
      <mesh position={[0.22, 1.6, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <torusGeometry args={[0.32, 0.09, 8, 20, Math.PI]} />
        <meshStandardMaterial color="#FFD166" roughness={0.2} metalness={0.1} />
      </mesh>
      {/* Center knot */}
      <mesh position={[0, 1.58, 0]}>
        <sphereGeometry args={[0.14, 12, 12]} />
        <meshStandardMaterial color="#FFD166" roughness={0.2} metalness={0.1} />
      </mesh>
    </group>
  );
}

// Stars
function Star({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const offset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime + offset;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.8 + offset;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5 + offset) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale} castShadow>
      <octahedronGeometry args={[0.15]} />
      <meshStandardMaterial color="#FFD166" roughness={0.15} metalness={0.3} envMapIntensity={2} />
    </mesh>
  );
}

// Main component that renders all baby items
export function BabyItemsScene() {
  return (
    <>
      {/* Center gift box */}
      <GiftBox position={[0, 1, 0]} scale={1} />

      {/* Floating baby items around the scene */}
      <BabyBottle position={[-3, 2.5, -1]} scale={1.2} />
      <BabyBottle position={[3.5, 1.8, 2]} scale={0.9} />
      
      <TeddyBear position={[3, 2.2, -2]} scale={0.8} />
      <TeddyBear position={[-3.5, 1.5, 2]} scale={0.6} />
      
      <BabyOnesie position={[-2.5, 3, 1.5]} scale={1} />
      <BabyOnesie position={[2.8, 3.2, 1]} scale={0.7} />
      
      <Pacifier position={[1.5, 3.5, -1.5]} scale={1.5} />
      <Pacifier position={[-2, 2, -2]} scale={1} />
      
      <BuildingBlocks position={[-1.5, 0.15, 3]} scale={1} />
      <BuildingBlocks position={[2, 0.15, 3.5]} scale={0.8} />
      
      <BabyRattle position={[4, 2.8, 0]} scale={1.2} />
      <BabyRattle position={[-4, 3, -1]} scale={1} />
      
      <BabyBootie position={[1, 3.8, 2]} scale={1.3} />
      <BabyBootie position={[-1, 2.5, 3]} scale={1} />

      {/* Decorative stars */}
      <Star position={[-2, 4, 0.5]} scale={1.2} />
      <Star position={[2.3, 3.8, -0.3]} scale={1} />
      <Star position={[0.5, 4.5, -1]} scale={0.8} />
      <Star position={[-1.5, 1.5, 1.5]} scale={0.6} />
      <Star position={[1.8, 0.8, -1.6]} scale={0.7} />
      <Star position={[-0.8, 4.2, 1.2]} scale={0.5} />
      <Star position={[3.5, 3.5, 1.5]} scale={0.9} />
      <Star position={[-3, 4, 2]} scale={0.7} />
    </>
  );
}

export {
  BabyBottle,
  TeddyBear,
  BabyOnesie,
  Pacifier,
  BuildingBlocks,
  BabyRattle,
  BabyBootie,
  GiftBox,
  Star,
};
