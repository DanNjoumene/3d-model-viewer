import { captureScreenshot } from '../../hooks/useScreenshot';

export const ExportButton = () => {
  return (
    <button className="btn-export" onClick={() => captureScreenshot('png')}>
      📸 Export Screenshot
    </button>
  );
};
