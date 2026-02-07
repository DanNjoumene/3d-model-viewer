import * as THREE from 'three';
import { CameraPreset } from '../types/model.types';

interface CameraPosition {
  position: THREE.Vector3;
  target: THREE.Vector3;
}

export const getCameraPosition = (preset: CameraPreset, modelBounds: THREE.Box3): CameraPosition => {
  const center = new THREE.Vector3();
  const size = new THREE.Vector3();

  modelBounds.getCenter(center);
  modelBounds.getSize(size);

  const maxDim = Math.max(size.x, size.y, size.z);
  const distance = maxDim * 2;

  const target = center.clone();

  let position: THREE.Vector3;

  switch (preset) {
    case 'front':
      position = new THREE.Vector3(center.x, center.y, center.z + distance);
      break;

    case 'side':
      position = new THREE.Vector3(center.x + distance, center.y, center.z);
      break;

    case 'top':
      position = new THREE.Vector3(center.x, center.y + distance, center.z);
      break;

    case '3/4':
      position = new THREE.Vector3(
        center.x + distance * 0.7,
        center.y + distance * 0.7,
        center.z + distance * 0.7
      );
      break;
  }

  return { position, target };
};
