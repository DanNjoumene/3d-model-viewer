import { RenderModes } from '../controls/RenderModes';
import { CameraPresets } from '../controls/CameraPresets';
import { LightingControls } from '../controls/LightingControls';
import { ExportButton } from '../controls/ExportButton';

export const ControlsPanel = () => {
  return (
    <aside className="controls">
      <RenderModes />
      <CameraPresets />
      <LightingControls />
      <ExportButton />
    </aside>
  );
};
