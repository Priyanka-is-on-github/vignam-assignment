// src/components/Hero3D.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, Html } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

// 3D Model Component
function Model() {
  const { scene } = useGLTF("/models/landing_page_motor.glb"); // Ensure this file is in public/models
  scene.traverse((child: any) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.side = THREE.FrontSide;
    }
  });
  return <primitive object={scene} scale={2} position={[0, 0, 0]} />;
}

export default function Hero3D() {
  return (
    <div className="w-full h-[200px] md:h-[200px] lg:h-[300px]  rounded-2xl   p-6 ">
      <Canvas
        shadows
        camera={{ position: [0, 1, 5], fov: 45 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense
          fallback={
            <Html center>
              <p className="text-gray-600 font-medium">Loading 3D Model...</p>
            </Html>
          }
        >
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1.2}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />

          {/* Metallic HDR Environment Map */}
          <Environment files="/hdr/motor.exr" background={false} />

          {/* 3D Model */}
          <Model />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={5.0}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
