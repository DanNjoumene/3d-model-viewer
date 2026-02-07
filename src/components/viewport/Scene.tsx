import { useEffect, useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useAppStore } from '../../store/useAppStore';
import { Model } from './Model';
import { getCameraPosition } from '../../utils/cameraPositions';
import * as THREE from 'three';

export const Scene = () => {
  const { modelObject, renderMode, mainLight, ambientLight, cameraPreset } = useAppStore();
  const { camera, controls } = useThree();
  const prevPreset = useRef(cameraPreset);

  // Handle camera preset changes
  useEffect(() => {
    if (cameraPreset && cameraPreset !== prevPreset.current && modelObject) {
      const box = new THREE.Box3().setFromObject(modelObject);
      const { position, target } = getCameraPosition(cameraPreset, box);

      camera.position.set(position.x, position.y, position.z);

      if (controls) {
        (controls as any).target.copy(target);
        (controls as any).update();
      }

      prevPreset.current = cameraPreset;
    }
  }, [cameraPreset, modelObject, camera, controls]);

  return (
    <>
      <OrbitControls makeDefault enableDamping dampingFactor={0.05} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={mainLight.intensity}
        color={mainLight.color}
        castShadow
      />

      <ambientLight intensity={ambientLight.intensity} color={ambientLight.color} />

      {modelObject && <Model object={modelObject} renderMode={renderMode} />}
    </>
  );
};
