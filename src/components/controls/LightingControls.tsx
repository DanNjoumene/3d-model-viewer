import { useAppStore } from '../../store/useAppStore';
import { Panel } from '../ui/Panel';

export const LightingControls = () => {
  const { mainLight, ambientLight, setMainLight, setAmbientLight } = useAppStore();

  return (
    <Panel title="Lighting">
      <div className="light-section">
        {/* Main Light */}
        <div className="light-group">
          <div className="light-header">
            <span className="light-indicator"></span>
            Main Light
          </div>
          <div className="control-row">
            <label className="control-label">
              <span>Intensity</span>
              <span className="control-value">{Math.round(mainLight.intensity * 100)}%</span>
            </label>
            <input
              type="range"
              min={0}
              max={2}
              step={0.01}
              value={mainLight.intensity}
              onChange={(e) => setMainLight({ intensity: parseFloat(e.target.value) })}
            />
          </div>
          <div className="control-row">
            <label className="control-label">
              <span>Color</span>
            </label>
            <input
              type="color"
              value={mainLight.color}
              onChange={(e) => setMainLight({ color: e.target.value })}
            />
          </div>
          <button
            className="btn-reset"
            onClick={() => setMainLight({ intensity: 1, color: '#ffffff' })}
          >
            Reset
          </button>
        </div>

        {/* Ambient Light */}
        <div className="light-group">
          <div className="light-header">
            <span className="light-indicator"></span>
            Ambient Light
          </div>
          <div className="control-row">
            <label className="control-label">
              <span>Intensity</span>
              <span className="control-value">{Math.round(ambientLight.intensity * 100)}%</span>
            </label>
            <input
              type="range"
              min={0}
              max={2}
              step={0.01}
              value={ambientLight.intensity}
              onChange={(e) => setAmbientLight({ intensity: parseFloat(e.target.value) })}
            />
          </div>
          <div className="control-row">
            <label className="control-label">
              <span>Color</span>
            </label>
            <input
              type="color"
              value={ambientLight.color}
              onChange={(e) => setAmbientLight({ color: e.target.value })}
            />
          </div>
          <button
            className="btn-reset"
            onClick={() => setAmbientLight({ intensity: 0.5, color: '#404040' })}
          >
            Reset
          </button>
        </div>
      </div>
    </Panel>
  );
};
