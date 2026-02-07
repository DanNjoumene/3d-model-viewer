// This hook doesn't use React Three Fiber hooks anymore
// It will be called with the canvas element directly

export const captureScreenshot = (format: 'png' | 'jpg' = 'png') => {
  // Find the canvas element
  const canvas = document.querySelector('canvas');

  if (!canvas) {
    console.error('No canvas found');
    return;
  }

  try {
    // Get the canvas data
    const dataURL = canvas.toDataURL(`image/${format}`, 1.0);

    // Create download link
    const link = document.createElement('a');
    link.download = `screenshot-${Date.now()}.${format}`;
    link.href = dataURL;
    link.click();
  } catch (error) {
    console.error('Failed to capture screenshot:', error);
  }
};
