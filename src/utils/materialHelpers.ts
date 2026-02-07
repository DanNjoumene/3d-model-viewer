import * as THREE from 'three';
import { RenderMode } from '../types/model.types';

export const createUVCheckerTexture = (): THREE.CanvasTexture => {
  const size = 512;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Failed to get canvas context');
  }

  const accentColor = '#00ff88';
  const darkColor = '#1a1a26';
  const checkerSize = size / 8;

  // Draw checkerboard pattern
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      ctx.fillStyle = (x + y) % 2 === 0 ? accentColor : darkColor;
      ctx.fillRect(x * checkerSize, y * checkerSize, checkerSize, checkerSize);
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.colorSpace = THREE.SRGBColorSpace;

  return texture;
};

const uvCheckerTexture = createUVCheckerTexture();

export const applyRenderMode = (object: THREE.Group, mode: RenderMode): void => {
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      // Store original material if not already stored
      if (!child.userData.originalMaterial) {
        child.userData.originalMaterial = child.material;
      }

      switch (mode) {
        case 'pbr':
          // Restore original material
          if (child.userData.originalMaterial) {
            child.material = child.userData.originalMaterial;
          }
          break;

        case 'wireframe':
          // Wireframe mode with accent color
          child.material = new THREE.MeshBasicMaterial({
            color: 0x00ff88,
            wireframe: true,
            transparent: true,
            opacity: 0.8,
          });
          break;

        case 'normals':
          // Normal visualization
          child.material = new THREE.MeshNormalMaterial();
          break;

        case 'uv':
          // UV checker pattern
          child.material = new THREE.MeshBasicMaterial({
            map: uvCheckerTexture,
          });
          break;

        case 'unlit':
          // Flat unlit shading
          const originalMaterial = child.userData.originalMaterial;
          let color = 0x888888;

          // Try to extract color from original material
          if (originalMaterial && 'color' in originalMaterial) {
            color = (originalMaterial as any).color.getHex();
          }

          child.material = new THREE.MeshBasicMaterial({
            color,
          });
          break;
      }

      // Ensure material is updated
      if (child.material) {
        (child.material as THREE.Material).needsUpdate = true;
      }
    }
  });
};
