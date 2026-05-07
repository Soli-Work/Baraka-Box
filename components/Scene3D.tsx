"use client";

import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, ContactShadows, Float, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { BabyItemsScene } from "./BabyItems3D";

// Camera controller with scroll-based animation
function CameraController({ scrollProgress }: { scrollProgress: number }) {
  const { camera } = useThree();
  
  // Keyframes for camera positions
  const keyframes = [
    { p: 0.0, pos: [0, 3, 8], tgt: [0, 1.2, 0], fov: 50 },
    { p: 0.25, pos: [4, 2.5, 5], tgt: [0, 1.5, 0], fov: 45 },
    { p: 0.5, pos: [-3, 3.5, 4], tgt: [0, 1.8, 0], fov: 42 },
    { p: 0.75, pos: [0, 4, 3], tgt: [0, 2, 0], fov: 38 },
    { p: 1.0, pos: [-4, 2, 6], tgt: [0, 1, 0], fov: 50 },
  ];

  useFrame(() => {
    // Find the two keyframes we're between
    let k1 = keyframes[0];
    let k2 = keyframes[1];
    
    for (let i = 0; i < keyframes.length - 1; i++) {
      if (scrollProgress >= keyframes[i].p && scrollProgress <= keyframes[i + 1].p) {
        k1 = keyframes[i];
        k2 = keyframes[i + 1];
        break;
      }
    }
    
    // Calculate local progress between keyframes
    const range = k2.p - k1.p;
    const localProgress = range > 0 ? (scrollProgress - k1.p) / range : 0;
    const t = smoothstep(localProgress);
    
    // Interpolate camera position
    const pos = new THREE.Vector3(
      lerp(k1.pos[0], k2.pos[0], t),
      lerp(k1.pos[1], k2.pos[1], t),
      lerp(k1.pos[2], k2.pos[2], t)
    );
    
    // Interpolate look target
    const tgt = new THREE.Vector3(
      lerp(k1.tgt[0], k2.tgt[0], t),
      lerp(k1.tgt[1], k2.tgt[1], t),
      lerp(k1.tgt[2], k2.tgt[2], t)
    );
    
    camera.position.lerp(pos, 0.08);
    camera.lookAt(tgt);
    
    // Update FOV if it's a PerspectiveCamera
    if (camera instanceof THREE.PerspectiveCamera) {
      const targetFov = lerp(k1.fov, k2.fov, t);
      camera.fov = THREE.MathUtils.lerp(camera.fov, targetFov, 0.08);
      camera.updateProjectionMatrix();
    }
  });

  return null;
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function smoothstep(t: number): number {
  return t * t * (3 - 2 * t);
}

// Lights setup
function Lights() {
  return (
    <>
      <ambientLight intensity={0.6} color="#fff4ee" />
      <directionalLight
        position={[4, 8, 5]}
        intensity={2}
        color="#fff0e8"
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <directionalLight position={[-5, 4, 2]} intensity={1} color="#ffddcc" />
      <pointLight position={[3, 3, 0]} intensity={1.5} color="#F4645C" distance={18} />
      <pointLight position={[-3, 2, 4]} intensity={1.2} color="#FFD166" distance={15} />
    </>
  );
}

// Floor with shadow
function Floor() {
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[40, 40]} />
        <shadowMaterial opacity={0.08} />
      </mesh>
      <ContactShadows
        position={[0, 0.01, 0]}
        opacity={0.4}
        scale={20}
        blur={2}
        far={4}
        color="#F4645C"
      />
    </>
  );
}

// Main 3D scene component
function Scene({ scrollProgress }: { scrollProgress: number }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 3, 8]} fov={50} />
      <CameraController scrollProgress={scrollProgress} />
      <Lights />
      <Environment preset="studio" />
      <fog attach="fog" args={["#FFF8F0", 5, 30]} />
      
      <Float
        speed={1.5}
        rotationIntensity={0.2}
        floatIntensity={0.3}
      >
        <BabyItemsScene />
      </Float>
      
      <Floor />
    </>
  );
}

// Loading fallback
function Loader() {
  return null;
}

// Main exported component
export default function Scene3D({ scrollProgress = 0 }: { scrollProgress?: number }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
        }}
        style={{ background: "#FFF8F0" }}
      >
        <Suspense fallback={<Loader />}>
          <Scene scrollProgress={scrollProgress} />
        </Suspense>
      </Canvas>
    </div>
  );
}
