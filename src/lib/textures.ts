import * as THREE from 'three'

const cache = new Map<string, THREE.CanvasTexture>()

export function labelTexture(label: string, fg = '#F7F2EA', bg = '#1E2A44') {
  const key = `${label}|${fg}|${bg}`
  const hit = cache.get(key)
  if (hit) return hit

  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 256
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('canvas')

  ctx.fillStyle = bg
  if (typeof ctx.roundRect === 'function') {
    ctx.roundRect(0, 0, 512, 256, 48)
    ctx.fill()
  } else {
    ctx.fillRect(0, 0, 512, 256)
  }
  ctx.fillStyle = fg
  ctx.font = '700 72px "Plus Jakarta Sans", system-ui, sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(label, 256, 128)

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.anisotropy = 8
  cache.set(key, texture)
  return texture
}
