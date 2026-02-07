import { Performance, PerformanceStatus } from '../types/model.types';

interface PerformanceInput {
  triangleCount: number;
  fileSize: number;
  textureMemory: number;
  materialCount: number;
}

export const calculatePerformanceScore = (input: PerformanceInput): Performance => {
  let score = 100;
  const tips: string[] = [];

  // File size penalties
  const fileSizeMB = input.fileSize / (1024 * 1024);
  if (fileSizeMB > 50) {
    score -= 30;
    tips.push('File size is very large. Consider compressing or optimizing geometry.');
  } else if (fileSizeMB > 10) {
    score -= 15;
    tips.push('File size is moderately large. Review asset optimization.');
  }

  // Triangle count penalties
  if (input.triangleCount > 200000) {
    score -= 30;
    tips.push('Triangle count is very high. Consider decimation or LOD strategies.');
  } else if (input.triangleCount > 50000) {
    score -= 15;
    tips.push('Triangle count is moderate. Monitor performance on lower-end devices.');
  }

  // Material count penalties
  if (input.materialCount > 10) {
    score -= 10;
    tips.push('High material count. Consider material consolidation.');
  }

  // Texture memory penalties
  const textureMemoryMB = input.textureMemory / (1024 * 1024);
  if (textureMemoryMB > 50) {
    score -= 20;
    tips.push('Texture memory usage is high. Reduce texture resolutions to 2K or lower.');
  } else if (textureMemoryMB > 20) {
    score -= 10;
    tips.push('Texture memory is moderate. Consider texture atlas merging.');
  }

  // Ensure score doesn't go below 0
  score = Math.max(0, score);

  // Determine status
  let status: PerformanceStatus;
  if (score >= 80) {
    status = 'good';
  } else if (score >= 55) {
    status = 'moderate';
  } else {
    status = 'poor';
  }

  // Add positive feedback if no issues
  if (tips.length === 0) {
    tips.push('Model is well optimized for real-time rendering.');
  }

  return {
    score: Math.round(score),
    fileSize: input.fileSize,
    textureMemory: input.textureMemory,
    triangleCount: input.triangleCount,
    status,
    tips,
  };
};
