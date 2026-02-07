import { useAppStore } from '../../store/useAppStore';

export const ViewportControls = () => {
  const { showGrid, showAxes, toggleGrid, toggleAxes } = useAppStore();

  return (
    <div className="viewport-controls">
      <button
        className={`viewport-btn ${showGrid ? 'active' : ''}`}
        onClick={toggleGrid}
      >
        Grid
      </button>
      <button
        className={`viewport-btn ${showAxes ? 'active' : ''}`}
        onClick={toggleAxes}
      >
        Axes
      </button>
    </div>
  );
};
