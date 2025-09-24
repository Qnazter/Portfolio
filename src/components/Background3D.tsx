import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Text3D, Center, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({ position, color, shape = 'box' }: { position: [number, number, number], color: string, shape?: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;
    }
  });

  const geometry = useMemo(() => {
    switch (shape) {
      case 'sphere':
        return new THREE.SphereGeometry(0.5, 32, 32);
      case 'torus':
        return new THREE.TorusGeometry(0.3, 0.1, 16, 100);
      case 'octahedron':
        return new THREE.OctahedronGeometry(0.5);
      default:
        return new THREE.BoxGeometry(0.8, 0.8, 0.8);
    }
  }, [shape]);

  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={0.5}
    >
      <mesh ref={meshRef} position={position} geometry={geometry}>
        <meshStandardMaterial color={color} wireframe opacity={0.3} transparent />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const points = useRef<THREE.Points>(null);
  const particleCount = 100;
  
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x += 0.0005;
      points.current.rotation.y += 0.001;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00bcd4"
        size={0.02}
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Scene() {
  const shapes = [
    { position: [-4, 2, -5], color: "#00bcd4", shape: "box" },
    { position: [4, -1, -3], color: "#0080ff", shape: "sphere" },
    { position: [-2, -3, -4], color: "#00bcd4", shape: "torus" },
    { position: [3, 3, -6], color: "#0080ff", shape: "octahedron" },
    { position: [0, 0, -8], color: "#00bcd4", shape: "box" },
    { position: [-5, -2, -2], color: "#0080ff", shape: "sphere" },
  ];

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#00bcd4" />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#0080ff" />
      
      <ParticleField />
      
      {shapes.map((shape, index) => (
        <FloatingShape
          key={index}
          position={shape.position as [number, number, number]}
          color={shape.color}
          shape={shape.shape}
        />
      ))}
    </>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}