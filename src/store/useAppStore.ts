import { create } from 'zustand';
import * as THREE from 'three';
import { ModelStats, Performance, RenderMode, CameraPreset, LightConfig } from '../types/model.types';

interface AppStore {
  // Model State
  modelFile: File | null;
  modelUrl: string | null;
  modelObject: THREE.Group | null;
  isLoading: boolean;
  loadingProgress: number;

  // Statistics
  stats: ModelStats | null;

  // Performance
  performance: Performance | null;

  // Render Settings
  renderMode: RenderMode;

  // Lighting
  mainLight: LightConfig;
  ambientLight: LightConfig;

  // Camera & Viewport
  cameraPreset: CameraPreset | null;
  showGrid: boolean;
  showAxes: boolean;

  // Actions
  setModelFile: (file: File | null) => void;
  setModelObject: (object: THREE.Group | null) => void;
  setStats: (stats: ModelStats | null) => void;
  setPerformance: (performance: Performance | null) => void;
  setRenderMode: (mode: RenderMode) => void;
  setMainLight: (light: Partial<LightConfig>) => void;
  setAmbientLight: (light: Partial<LightConfig>) => void;
  setCameraPreset: (preset: CameraPreset | null) => void;
  toggleGrid: () => void;
  toggleAxes: () => void;
  resetLighting: () => void;
  setIsLoading: (loading: boolean) => void;
  setLoadingProgress: (progress: number) => void;
}

const DEFAULT_MAIN_LIGHT: LightConfig = {
  intensity: 1,
  color: '#ffffff',
};

const DEFAULT_AMBIENT_LIGHT: LightConfig = {
  intensity: 0.5,
  color: '#404040',
};

export const useAppStore = create<AppStore>((set) => ({
  // Initial State
  modelFile: null,
  modelUrl: null,
  modelObject: null,
  isLoading: false,
  loadingProgress: 0,
  stats: null,
  performance: null,
  renderMode: 'pbr',
  mainLight: DEFAULT_MAIN_LIGHT,
  ambientLight: DEFAULT_AMBIENT_LIGHT,
  cameraPreset: null,
  showGrid: false,
  showAxes: false,

  // Actions
  setModelFile: (file) => set({ modelFile: file }),
  setModelObject: (object) => set({ modelObject: object }),
  setStats: (stats) => set({ stats }),
  setPerformance: (performance) => set({ performance }),
  setRenderMode: (mode) => set({ renderMode: mode }),
  setMainLight: (light) =>
    set((state) => ({
      mainLight: { ...state.mainLight, ...light },
    })),
  setAmbientLight: (light) =>
    set((state) => ({
      ambientLight: { ...state.ambientLight, ...light },
    })),
  setCameraPreset: (preset) => set({ cameraPreset: preset }),
  toggleGrid: () => set((state) => ({ showGrid: !state.showGrid })),
  toggleAxes: () => set((state) => ({ showAxes: !state.showAxes })),
  resetLighting: () =>
    set({
      mainLight: DEFAULT_MAIN_LIGHT,
      ambientLight: DEFAULT_AMBIENT_LIGHT,
    }),
  setIsLoading: (loading) => set({ isLoading: loading }),
  setLoadingProgress: (progress) => set({ loadingProgress: progress }),
}));
