import { useRef } from 'react';
import { useModelLoader } from '../../hooks/useModelLoader';
import { useAppStore } from '../../store/useAppStore';
import { Panel } from '../ui/Panel';

export const UploadZone = () => {
  const { loadModel } = useModelLoader();
  const { isLoading, loadingProgress } = useAppStore();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      loadModel(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Panel title="Model Upload">
      <div className="upload-zone" onClick={handleClick}>
        <div className="upload-icon">📦</div>
        <div className="upload-text">Drop 3D model or click to browse</div>
        <div className="upload-formats">.glb • .gltf • .obj • .fbx</div>
      </div>
      {isLoading && (
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${loadingProgress}%` }}></div>
        </div>
      )}
      <input
        ref={fileInputRef}
        type="file"
        accept=".glb,.gltf,.obj,.fbx"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </Panel>
  );
};
