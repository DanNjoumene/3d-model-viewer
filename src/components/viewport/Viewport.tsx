import { Canvas } from '@react-three/fiber';
import { useAppStore } from '../../store/useAppStore';
import { Scene } from './Scene';
import { ViewportInfo } from './ViewportInfo';
import { ViewportControls } from './ViewportControls';

export const Viewport = () => {
  const { showGrid, showAxes, modelObject } = useAppStore();

  return (
    <div className="viewport">
      <Canvas
        camera={{ position: [5, 5, 5], fov: 50 }}
        gl={{ preserveDrawingBuffer: true }}
        style={{ width: '100%', height: '100%' }}
      >
        <Scene />
        {showGrid && <gridHelper args={[20, 20, '#252533', '#252533']} />}
        {showAxes && <axesHelper args={[5]} />}
      </Canvas>

      {!modelObject && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            pointerEvents: 'none',
          }}
        >
          <div className="viewport-placeholder">
            <div className="viewport-placeholder-icon">🎯</div>
            <p>Upload a 3D model to begin</p>
          </div>
        </div>
      )}

      <ViewportInfo />
      <ViewportControls />
    </div>
  );
};
