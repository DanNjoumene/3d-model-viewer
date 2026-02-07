import { useAppStore } from '../store/useAppStore';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { calculateModelStats, calculateTextureMemory } from '../utils/modelAnalysis';
import { calculatePerformanceScore } from '../utils/performanceCalculator';
import * as THREE from 'three';

export const useModelLoader = () => {
  const {
    setModelObject,
    setStats,
    setPerformance,
    setIsLoading,
    setLoadingProgress,
    setModelFile,
  } = useAppStore();

  const loadModel = async (file: File) => {
    setIsLoading(true);
    setLoadingProgress(0);
    setModelFile(file);

    try {
      const url = URL.createObjectURL(file);
      const extension = file.name.split('.').pop()?.toLowerCase();

      let object: THREE.Group;

      if (extension === 'glb' || extension === 'gltf') {
        const loader = new GLTFLoader();
        const gltf = await loader.loadAsync(url, (progress) => {
          if (progress.total > 0) {
            setLoadingProgress((progress.loaded / progress.total) * 100);
          }
        });
        object = gltf.scene;
      } else if (extension === 'obj') {
        const loader = new OBJLoader();
        const loadedObject = await loader.loadAsync(url, (progress) => {
          if (progress.total > 0) {
            setLoadingProgress((progress.loaded / progress.total) * 100);
          }
        });
        object = loadedObject;
      } else if (extension === 'fbx') {
        const loader = new FBXLoader();
        const loadedObject = await loader.loadAsync(url, (progress) => {
          if (progress.total > 0) {
            setLoadingProgress((progress.loaded / progress.total) * 100);
          }
        });
        object = loadedObject;
      } else {
        throw new Error('Unsupported file format. Please use .glb, .gltf, .obj, or .fbx files.');
      }

      // Calculate stats
      const statsWithoutFileSize = calculateModelStats(object);
      const textureMemory = calculateTextureMemory(object);

      const stats = {
        ...statsWithoutFileSize,
        fileSize: file.size,
      };

      setStats(stats);

      // Calculate performance
      const performance = calculatePerformanceScore({
        triangleCount: stats.triangleCount,
        fileSize: file.size,
        textureMemory,
        materialCount: stats.materialCount,
      });

      setPerformance(performance);

      // Set model
      setModelObject(object);

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Failed to load model:', error);
      alert(`Failed to load model: ${error instanceof Error ? error.message : 'Unknown error'}`);
      setModelObject(null);
      setStats(null);
      setPerformance(null);
    } finally {
      setIsLoading(false);
      setLoadingProgress(0);
    }
  };

  return { loadModel };
};
