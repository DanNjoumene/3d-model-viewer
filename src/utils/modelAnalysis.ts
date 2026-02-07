import * as THREE from 'three';
import { ModelStats } from '../types/model.types';

export const calculateModelStats = (object: THREE.Group): Omit<ModelStats, 'fileSize'> => {
  let vertexCount = 0;
  let triangleCount = 0;
  let meshCount = 0;
  const materials = new Set<THREE.Material>();

  // Traverse all meshes in the model
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      meshCount++;

      const geometry = child.geometry;

      if (geometry) {
        // Count vertices
        if (geometry.attributes.position) {
          vertexCount += geometry.attributes.position.count;
        }

        // Count triangles
        if (geometry.index) {
          triangleCount += geometry.index.count / 3;
        } else if (geometry.attributes.position) {
          triangleCount += geometry.attributes.position.count / 3;
        }
      }

      // Collect unique materials
      if (Array.isArray(child.material)) {
        child.material.forEach((mat) => materials.add(mat));
      } else if (child.material) {
        materials.add(child.material);
      }
    }
  });

  // Calculate bounding box dimensions
  const box = new THREE.Box3().setFromObject(object);
  const size = new THREE.Vector3();
  box.getSize(size);

  return {
    vertexCount: Math.round(vertexCount),
    triangleCount: Math.round(triangleCount),
    meshCount,
    materialCount: materials.size,
    dimensions: {
      width: size.x,
      height: size.y,
      depth: size.z,
    },
  };
};

export const calculateTextureMemory = (object: THREE.Group): number => {
  let totalMemory = 0;
  const textures = new Set<THREE.Texture>();

  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      const materials = Array.isArray(child.material) ? child.material : [child.material];

      materials.forEach((material) => {
        if (material instanceof THREE.MeshStandardMaterial ||
            material instanceof THREE.MeshBasicMaterial ||
            material instanceof THREE.MeshPhysicalMaterial) {
          // Check all possible texture properties
          const textureProps = ['map', 'normalMap', 'roughnessMap', 'metalnessMap',
                               'aoMap', 'emissiveMap', 'bumpMap', 'displacementMap'];

          textureProps.forEach((prop) => {
            const texture = (material as any)[prop];
            if (texture instanceof THREE.Texture && texture.image) {
              textures.add(texture);
            }
          });
        }
      });
    }
  });

  textures.forEach((texture) => {
    if (texture.image) {
      const width = texture.image.width || 1024;
      const height = texture.image.height || 1024;
      // Estimate memory (4 bytes per pixel for RGBA)
      totalMemory += width * height * 4;
    }
  });

  return totalMemory;
};
