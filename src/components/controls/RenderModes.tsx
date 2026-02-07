import { useAppStore } from '../../store/useAppStore';
import { Panel } from '../ui/Panel';
import { RenderMode } from '../../types/model.types';

export const RenderModes = () => {
  const { renderMode, setRenderMode } = useAppStore();

  const modes: Array<{ id: RenderMode; label: string }> = [
    { id: 'pbr', label: 'PBR' },
    { id: 'wireframe', label: 'Wire' },
    { id: 'normals', label: 'Normal' },
    { id: 'uv', label: 'UV' },
    { id: 'unlit', label: 'Unlit' },
  ];

  return (
    <Panel title="Render Mode">
      <div className="render-modes">
        {modes.map((mode) => (
          <button
            key={mode.id}
            className={`mode-btn ${renderMode === mode.id ? 'active' : ''}`}
            onClick={() => setRenderMode(mode.id)}
          >
            {mode.label}
          </button>
        ))}
      </div>
    </Panel>
  );
};
