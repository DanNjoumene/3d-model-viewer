import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { applyRenderMode } from '../../utils/materialHelpers';
import { RenderMode } from '../../types/model.types';

interface ModelProps {
  object: THREE.Group;
  renderMode: RenderMode;
}

export const Model = ({ object, renderMode }: ModelProps) => {
  const { camera, controls } = useThree();

  // Auto-fit camera on load
  useEffect(() => {
    if (!object) return;

    const box = new THREE.Box3().setFromObject(object);
    const center = new THREE.Vector3();
    const size = new THREE.Vector3();

    box.getCenter(center);
    box.getSize(size);

    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = ((camera as THREE.PerspectiveCamera).fov * Math.PI) / 180;
    const distance = (maxDim / (2 * Math.tan(fov / 2))) * 1.5;

    camera.position.set(
      center.x + distance * 0.7,
      center.y + distance * 0.7,
      center.z + distance * 0.7
    );

    if (controls) {
      (controls as any).target.copy(center);
      (controls as any).update();
    }
  }, [object, camera, controls]);

  // Apply render mode
  useEffect(() => {
    if (object) {
      applyRenderMode(object, renderMode);
    }
  }, [object, renderMode]);

  return <primitive object={object} />;
};
