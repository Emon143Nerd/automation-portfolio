import { Canvas, useFrame } from '@react-three/fiber'
import { Float, RoundedBox } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import type { Group, Mesh } from 'three'
import * as THREE from 'three'
import { labelTexture } from '../lib/textures'

const navy = '#1e2a44'
const navyHi = '#334564'

function Face({ label, color }: { label: string; color: string }) {
  const map = useMemo(() => labelTexture(label, '#eef2f7', color), [label, color])
  return (
    <mesh position={[0, 0, 0.62]}>
      <planeGeometry args={[0.86, 0.43]} />
      <meshBasicMaterial map={map} transparent />
    </mesh>
  )
}

function SceneContent({ pointer }: { pointer: React.MutableRefObject<{ x: number; y: number }> }) {
  const group = useRef<Group>(null)
  const torus = useRef<Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.current.x * 0.28, 0.06)
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, pointer.current.y * 0.12, 0.06)
      group.current.position.y = Math.sin(t * 0.6) * 0.08
    }
    if (torus.current) {
      torus.current.rotation.z = -0.28 + Math.sin(t * 0.25) * 0.05
    }
  })

  return (
    <group ref={group} position={[0.35, 0, 0]}>
      <mesh ref={torus} rotation={[0.5, -0.72, -0.08]} position={[0.9, 0.05, -1.2]}>
        <torusGeometry args={[3.45, 1.02, 48, 120, Math.PI * 1.2]} />
        <meshStandardMaterial color={navy} roughness={0.38} metalness={0.14} />
      </mesh>

      <Float speed={1.6} rotationIntensity={0.45} floatIntensity={0.7}>
        <group position={[-0.15, 1.35, 1.2]} rotation={[0.16, 0.4, -0.1]}>
          <RoundedBox args={[1.18, 1.18, 1.18]} radius={0.18} smoothness={6}>
            <meshStandardMaterial color={navyHi} roughness={0.32} metalness={0.18} />
          </RoundedBox>
          <Face label="EB" color={navyHi} />
        </group>
      </Float>

      <Float speed={1.2} rotationIntensity={0.32} floatIntensity={0.5}>
        <group position={[1.35, 0.4, 1.45]} rotation={[-0.18, -0.26, 0.16]}>
          <RoundedBox args={[1.02, 1.02, 1.02]} radius={0.16} smoothness={6}>
            <meshStandardMaterial color={navy} roughness={0.34} metalness={0.16} />
          </RoundedBox>
          <Face label="AI" color={navy} />
        </group>
      </Float>

      <Float speed={1.35} rotationIntensity={0.4} floatIntensity={0.8}>
        <group position={[0.2, -1.2, 1.35]} rotation={[0.28, 0.5, 0.08]}>
          <RoundedBox args={[1.22, 1.22, 1.22]} radius={0.2} smoothness={6}>
            <meshStandardMaterial color="#24344f" roughness={0.3} metalness={0.2} />
          </RoundedBox>
          <Face label="OPS" color="#24344f" />
        </group>
      </Float>
    </group>
  )
}

export function HeroScene() {
  const pointer = useRef({ x: 0, y: 0 })

  return (
    <div
      className="scene-host"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        pointer.current.x = ((e.clientX - r.left) / r.width) * 2 - 1
        pointer.current.y = -(((e.clientY - r.top) / r.height) * 2 - 1)
      }}
      onPointerLeave={() => {
        pointer.current.x = 0
        pointer.current.y = 0
      }}
    >
      <Canvas camera={{ position: [1.6, 0.15, 7.4], fov: 32 }} dpr={[1, 1.6]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.7} />
        <hemisphereLight args={['#f7f1e8', '#8d8378', 0.8]} />
        <directionalLight position={[6, 8, 6]} intensity={1.25} color="#fff6ea" />
        <spotLight position={[2, 6, 8]} angle={0.45} intensity={0.9} penumbra={0.85} color="#ffffff" />
        <SceneContent pointer={pointer} />
      </Canvas>
    </div>
  )
}
