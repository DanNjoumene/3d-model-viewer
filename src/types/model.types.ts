import * as THREE from 'three';

export type RenderMode = 'pbr' | 'wireframe' | 'normals' | 'uv' | 'unlit';
export type CameraPreset = 'front' | 'side' | 'top' | '3/4';
export type PerformanceStatus = 'good' | 'moderate' | 'poor';

export interface ModelStats {
  vertexCount: number;
  triangleCount: number;
  meshCount: number;
  materialCount: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  fileSize: number;
}

export interface Performance {
  score: number;
  fileSize: number;
  textureMemory: number;
  triangleCount: number;
  status: PerformanceStatus;
  tips: string[];
}

export interface LightConfig {
  intensity: number;
  color: string;
}

export interface ModelData {
  file: File | null;
  url: string | null;
  object: THREE.Group | null;
}
