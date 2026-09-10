import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, Float, RoundedBox } from '@react-three/drei'
import { useMemo, useRef, useState } from 'react'
import type { Group, Mesh } from 'three'
import * as THREE from 'three'
import { labelTexture } from '../lib/textures'

type NodeDef = {
  id: string
  label: string
  position: [number, number, number]
  color: string
  hub?: boolean
}

const NODES: NodeDef[] = [
  { id: 'n8n', label: 'n8n', position: [0, 0.15, 0], color: '#EA4B71', hub: true },
  { id: 'gmail', label: 'Gmail', position: [-2.55, 1.15, 0.35], color: '#1E2A44' },
  { id: 'slack', label: 'Slack', position: [-2.35, -1.05, 0.2], color: '#2A3B5C' },
  { id: 'crm', label: 'CRM', position: [2.45, 1.2, 0.25], color: '#24344F' },
  { id: 'sheets', label: 'Sheets', position: [2.4, -1.1, 0.4], color: '#1E2A44' },
  { id: 'ai', label: 'AI', position: [0.15, 1.85, -0.35], color: '#C96540' },
]

const LINKS: [string, string][] = [
  ['gmail', 'n8n'],
  ['slack', 'n8n'],
  ['n8n', 'crm'],
  ['n8n', 'sheets'],
  ['ai', 'n8n'],
]

function nodeMap() {
  return Object.fromEntries(NODES.map((n) => [n.id, n])) as Record<string, NodeDef>
}

function Cable({
  a,
  b,
  active,
  offset,
}: {
  a: [number, number, number]
  b: [number, number, number]
  active: boolean
  offset: number
}) {
  const curve = useMemo(() => {
    const start = new THREE.Vector3(...a)
    const end = new THREE.Vector3(...b)
    const mid = start.clone().lerp(end, 0.5)
    mid.y += 0.55
    mid.z += 0.65
    return new THREE.QuadraticBezierCurve3(start, mid, end)
  }, [a, b])

  const geometry = useMemo(() => new THREE.TubeGeometry(curve, 40, 0.028, 8, false), [curve])
  const pulse = useRef<Mesh>(null)

  useFrame((state) => {
    if (!pulse.current) return
    const t = (state.clock.elapsedTime * 0.22 + offset) % 1
    curve.getPointAt(t, pulse.current.position)
    const s = active ? 1.35 : 1
    pulse.current.scale.setScalar(s)
  })

  return (
    <group>
      <mesh geometry={geometry}>
        <meshStandardMaterial
          color={active ? '#EA4B71' : '#9aa6bd'}
          emissive={active ? '#EA4B71' : '#2a3348'}
          emissiveIntensity={active ? 0.55 : 0.08}
          roughness={0.35}
          metalness={0.2}
        />
      </mesh>
      <mesh ref={pulse}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial color="#fff6ea" emissive="#EA4B71" emissiveIntensity={1.4} />
      </mesh>
    </group>
  )
}

function WorkflowNode({
  node,
  hovered,
  onHover,
}: {
  node: NodeDef
  hovered: string | null
  onHover: (id: string | null) => void
}) {
  const active = hovered === node.id || hovered === 'n8n' || node.hub
  const scale = node.hub ? 1.18 : 1
  const map = useMemo(() => labelTexture(node.label, '#F7F2EA', node.color), [node])

  return (
    <Float speed={node.hub ? 1.1 : 1.4} rotationIntensity={0.18} floatIntensity={node.hub ? 0.25 : 0.45}>
      <group
        position={node.position}
        scale={active ? scale * 1.08 : scale}
        onPointerOver={(e) => {
          e.stopPropagation()
          onHover(node.id)
        }}
        onPointerOut={() => onHover(null)}
      >
        <RoundedBox args={[1.35, 0.82, 0.42]} radius={0.14} smoothness={6}>
          <meshStandardMaterial
            color={node.color}
            roughness={0.34}
            metalness={0.22}
            emissive={node.hub ? '#EA4B71' : '#000000'}
            emissiveIntensity={node.hub ? 0.28 : 0}
          />
        </RoundedBox>
        <mesh position={[0, 0, 0.22]}>
          <planeGeometry args={[1.12, 0.5]} />
          <meshBasicMaterial map={map} transparent />
        </mesh>
        {node.hub ? (
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.02, 0]}>
            <torusGeometry args={[0.95, 0.035, 12, 48]} />
            <meshStandardMaterial color="#EA4B71" emissive="#EA4B71" emissiveIntensity={0.8} />
          </mesh>
        ) : null}
      </group>
    </Float>
  )
}

function Graph() {
  const group = useRef<Group>(null)
  const [hovered, setHovered] = useState<string | null>(null)
  const nodes = useMemo(nodeMap, [])

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.elapsedTime
    group.current.rotation.y = Math.sin(t * 0.18) * 0.22
    group.current.rotation.x = Math.sin(t * 0.12) * 0.08
  })

  return (
    <group ref={group} position={[0, 0.15, 0]}>
      {LINKS.map(([from, to], i) => (
        <Cable
          key={`${from}-${to}`}
          a={nodes[from].position}
          b={nodes[to].position}
          active={hovered === from || hovered === to || hovered === 'n8n'}
          offset={i * 0.17}
        />
      ))}
      {NODES.map((node) => (
        <WorkflowNode key={node.id} node={node} hovered={hovered} onHover={setHovered} />
      ))}
    </group>
  )
}

export function N8nScene() {
  return (
    <div className="scene-host n8n-host">
      <Canvas camera={{ position: [0, 0.4, 7.2], fov: 36 }} dpr={[1, 1.6]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.65} />
        <hemisphereLight args={['#ffe8e1', '#1e2a44', 0.7]} />
        <pointLight position={[0, 1.2, 2.4]} intensity={18} distance={12} color="#EA4B71" />
        <directionalLight position={[5, 6, 4]} intensity={1.1} color="#fff4ea" />
        <Graph />
        <ContactShadows position={[0, -2.05, 0]} opacity={0.28} scale={12} blur={2.4} far={6} color="#1e2a44" />
      </Canvas>
    </div>
  )
}
