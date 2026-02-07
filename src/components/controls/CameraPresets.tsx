import { useAppStore } from '../../store/useAppStore';
import { Panel } from '../ui/Panel';
import { CameraPreset } from '../../types/model.types';

interface CameraPresetsProps {
  onPresetClick?: (preset: CameraPreset) => void;
}

export const CameraPresets = ({ onPresetClick }: CameraPresetsProps) => {
  const { modelObject, setCameraPreset } = useAppStore();

  const handlePreset = (preset: CameraPreset) => {
    setCameraPreset(preset);
    if (onPresetClick) {
      onPresetClick(preset);
    }
  };

  return (
    <Panel title="Camera">
      <div className="camera-grid">
        <button
          className="camera-btn"
          onClick={() => handlePreset('front')}
          disabled={!modelObject}
        >
          <span className="camera-icon">⬆️</span>
          <span>Front</span>
        </button>
        <button
          className="camera-btn"
          onClick={() => handlePreset('side')}
          disabled={!modelObject}
        >
          <span className="camera-icon">➡️</span>
          <span>Side</span>
        </button>
        <button
          className="camera-btn"
          onClick={() => handlePreset('top')}
          disabled={!modelObject}
        >
          <span className="camera-icon">🔝</span>
          <span>Top</span>
        </button>
        <button
          className="camera-btn"
          onClick={() => handlePreset('3/4')}
          disabled={!modelObject}
        >
          <span className="camera-icon">📐</span>
          <span>3/4 View</span>
        </button>
      </div>
    </Panel>
  );
};
