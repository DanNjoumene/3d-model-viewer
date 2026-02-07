# VERTEX — 3D Model Viewer

A modern, high-performance 3D model viewer built with React, TypeScript, and Three.js. Features a dark technical-brutalist aesthetic with neon accents.

## Features

### Core Functionality
- ✅ **Model Loading** - Support for .glb, .gltf, .obj, and .fbx formats
- ✅ **Real-time Statistics** - Vertex count, triangle count, mesh count, materials, dimensions
- ✅ **Performance Analysis** - Automatic scoring with optimization tips
- ✅ **Multiple Render Modes** - PBR, Wireframe, Normals, UV Checker, Unlit
- ✅ **Interactive Lighting** - Adjustable main and ambient light intensity and color
- ✅ **Camera Presets** - Front, Side, Top, and 3/4 view angles
- ✅ **Screenshot Export** - High-quality PNG export functionality

### User Experience
- Drag-and-drop file upload with progress indicator
- Smooth camera controls (orbit, pan, zoom)
- Real-time render mode switching
- Grid and axes helpers
- Responsive layout
- Smooth animations throughout

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Three.js** - 3D rendering engine
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Three.js utilities
- **Zustand** - State management

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build
npm run preview
```

## Usage

1. **Upload a Model** - Click or drag-and-drop a 3D model file (.glb, .gltf, .obj, .fbx)
2. **Explore** - Use mouse controls to rotate, pan, and zoom
3. **Analyze** - View model statistics and performance metrics in the sidebar
4. **Customize** - Switch render modes, adjust lighting, and try camera presets
5. **Export** - Capture screenshots of your model

### Mouse Controls

- **Left-drag** - Rotate model
- **Right-drag** - Pan camera
- **Scroll** - Zoom in/out

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Sidebar, ControlsPanel
│   ├── upload/          # File upload UI
│   ├── stats/           # Model statistics and performance
│   ├── viewport/        # 3D canvas and scene
│   ├── controls/        # Render modes, camera, lighting
│   └── ui/              # Reusable UI components
├── hooks/               # Custom React hooks
├── utils/               # Core logic (analysis, materials, etc.)
├── types/               # TypeScript type definitions
├── store/               # Zustand state management
└── styles/              # Global CSS and animations
```

## Performance Tips

The app automatically analyzes your model and provides optimization suggestions:

- **File Size** - Keep under 10MB for web delivery
- **Triangle Count** - Aim for under 50k triangles for real-time performance
- **Texture Resolution** - Use 2K or lower textures
- **Material Count** - Consolidate materials where possible

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 15+

WebGL 2.0 required.

## License

MIT

## Credits

Built with ❤️ using Claude Code
